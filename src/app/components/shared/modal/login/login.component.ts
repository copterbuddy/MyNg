import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { Component, inject, input, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe],
  template: `
  <div class="modal-header">
			<h4 class="modal-title">Hi there!</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
    @if ((authFacades.isLogin() | async) == false) {
      <button class="btn btn-primary" (click)="login()">Login</button>
    }
    @else {
      <div class="modal-body">
        <p>Hello, {{ name() }}</p>
        <p>You are logged in</p>
      </div>
    }

		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeModal = inject(NgbActiveModal);

  authFacades = inject(AuthFacdes)

  name = signal<string>("")

  SetName(text: string){
    this.name.set(text)
  }

  login(){
    this.authFacades.login('2')
  }
}
