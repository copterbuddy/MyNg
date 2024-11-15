import { LocalStorageKey, LocalStorageService } from './../../services/localStorage/local-storage.service';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { Component, inject, input, signal, DestroyRef, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription, take } from 'rxjs';
import { UserInfo } from 'src/app/store/auth/auth.state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe],
  template: `
  <div class="modal-header">
			<h4 class="modal-title">Hi there!</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
    @if (!email()) {
      <button class="btn btn-primary" (click)="loginWithGoogle()">Login With Google</button>
    }
    @else {
      <div class="modal-body">
        <p>Hello, {{ email() }}</p>
        <p>You are logged in</p>
      </div>
    }

		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  deftroyRef = inject(DestroyRef)
  activeModal = inject(NgbActiveModal);

  authFacades = inject(AuthFacdes)
  http = inject(HttpClient)
  email = signal<string | null>(null)

  localStorageService = inject(LocalStorageService)

  isAutoLogin = false
  authSub: Subscription | null = null


  ngOnInit(): void {
    let isGoogleAutoLogin = (this.localStorageService.getData(
      LocalStorageKey.IsGoogleLogin
    ) ?? false) === 'true';

    if(isGoogleAutoLogin){
      this.authFacades.setUserInfoClient();
      this.isAutoLogin = isGoogleAutoLogin

    }

    if(this.isAutoLogin){
      this.authSub = this.authFacades.getUser().subscribe({
        next: (value) => {
          this.email.set(value.UserInfo.Email);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.localStorageService.removeData(LocalStorageKey.IsGoogleLogin)
          this.isAutoLogin = false
        },
      })
    }

    this.deftroyRef.onDestroy(() => {
      this.authSub?.unsubscribe();
    })
  }

  loginWithGoogle() {
    this.authFacades.loginFromGoogle();
    let sub = this.authFacades.getUser().subscribe({
      next: (value) => {
        if(value.IsGoogleLogin){
          window.location.href = 'http://localhost:5131/GoogleLogin/Index';
        }
      }
    });

    this.deftroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }
}
