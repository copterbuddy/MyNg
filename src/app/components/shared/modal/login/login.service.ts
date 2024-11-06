import { inject, Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly modalService  = inject(NgbModal)

  authFacade = inject(AuthFacdes)

  Open() {
		const modalRef = this.modalService.open(LoginComponent, { centered: true }).componentInstance as LoginComponent;

    this.authFacade.getUser().pipe(
      take(1)
    )
    .subscribe({
      next: (authState) => {
        console.log(JSON.stringify(authState))
        modalRef.SetName(authState?.UserInfo?.Email ?? '')
      }
    })
	}
}
