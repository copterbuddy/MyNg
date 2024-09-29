import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    var sub = this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').subscribe(data => {
      console.log(data);
    })
  }
}
