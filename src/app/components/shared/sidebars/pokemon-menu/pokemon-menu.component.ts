import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-menu.component.html',
  styleUrl: './pokemon-menu.component.css'
})
export class PokemonMenuComponent {

}
