import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-getter-funcction',
  standalone: true,
  imports: [],
  templateUrl: './getter-function.component.html',
  styleUrl: './getter-function.component.css'
})
export class GetterFunctionComponent {
  selectedUser = DUMMY_USERS[0]

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }
}
