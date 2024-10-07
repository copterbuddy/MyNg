import { Component, computed, signal } from '@angular/core';
import {DUMMY_USERS} from "../pokemon-shop/dummy-users";

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-emit-event-by-ng',
  standalone: true,
  imports: [],
  templateUrl: './emit-event-by-ng.component.html',
  styleUrl: './emit-event-by-ng.component.css'
})
export class EmitEventByNgComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex])
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)


  onSelectedUser(){
    randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
