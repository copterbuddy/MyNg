import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.css',
  host: {
    class: "container-fluid"
  }
})
export class MyPokemonComponent {

}
