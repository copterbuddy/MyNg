import { Component, computed, ElementRef, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

interface subMenu {
  link: string;
  text: string;
}

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css'],
})
export class DevsComponent {
  subMenus = signal<subMenu[]>([
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
  getSubMenu = computed(() => this.subMenus())

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'bisque';
  }
}
