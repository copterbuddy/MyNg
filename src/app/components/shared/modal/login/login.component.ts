import { Component, inject, input, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
  <div class="modal-header">
			<h4 class="modal-title">Hi there!</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
		<div class="modal-body">
			<p>Hello, {{ name() }}</p>
			<p>You are logged in</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeModal = inject(NgbActiveModal);
  name = signal<string>("")

  SetName(text: string){
    this.name.set(text)
  }
}
