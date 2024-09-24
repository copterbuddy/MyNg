import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-display-image',
  standalone: false,
  templateUrl: './display-image.component.html',
  styleUrl: './display-image.component.css'
})
export class DisplayImageComponent {
  selectedUser = DUMMY_USERS[0]
}
