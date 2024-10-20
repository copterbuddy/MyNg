import { inject, Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private modalService  = inject(NgbModal)

  Open() {
		const modalRef = this.modalService.open(LoginComponent, { centered: true }).componentInstance as LoginComponent;
		modalRef.SetName('cop')
	}
}
