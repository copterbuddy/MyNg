import { Component, computed, ElementRef, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

interface SubMenu {
  link: string;
  text: string;
}

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [HeaderComponent, RouterModule,RouterOutlet],
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css'],
})
export class DevsComponent {
  project = signal<SubMenu[]>([
    {
      link: '/devs/pokemon',
      text: 'pokemon',
    },
  ])

  subMenu = signal<SubMenu[]>([
    {
      link: '/devs/set-title',
      text: 'Set Title',
    },
    {
      link: '/devs/output-dynamic-content-with-string',
      text: 'display dynamic content with string',
    },
    {
      link: '/devs/display-image',
      text: 'display-image',
    },
    {
      link: '/devs/getter-function',
      text: 'devs/getter-function',
    },
    {
      link: '/devs/emit-event-by-ng',
      text: 'devs/emit-event-by-ng',
    },
  ])
}
