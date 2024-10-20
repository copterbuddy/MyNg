import { inject, Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthFacdes } from 'src/app/store/auth/auth.facades';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private modalService  = inject(NgbModal)

  authFacade = inject(AuthFacdes)


  Open() {
		const modalRef = this.modalService.open(LoginComponent, { centered: true }).componentInstance as LoginComponent;
		modalRef.SetName('cop')

    // this.authFacade.login('2')
	}
}
