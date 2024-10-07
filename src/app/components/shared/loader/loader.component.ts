import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  input,
  OnInit, Signal,
  signal,
  ViewChild
} from '@angular/core';
import {PokemonCardComponent} from "../../pokemon-shop/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div>
      @if (isLoading()){
        <div class="d-flex flex-column justify-content-center align-items-center" style="width: 10rem;height: 20rem;">
          <div class="spinner-grow" role="status"></div>
        </div>
      }
      @else{
        <ng-content></ng-content>
      }
    </div>
  `,
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit,AfterContentInit {
  public isLoading = signal<boolean>(true)
  loadingInput = input.required<boolean>()
  pokDetail: Signal<ElementRef<HTMLDivElement>> = contentChild.required('pokDetail')

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  }
}
