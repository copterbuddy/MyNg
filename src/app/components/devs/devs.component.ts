import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

interface subMenu {
  link: string,
  text: string
}

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent{
  subMenus: subMenu[] = [
    {
      link: '/devs/set-title',
      text: 'Set Title'
    },
    {
      link: '/devs/output-dynamic-content-with-string',
      text: 'display dynamic content with string'
    },
    {
      link: '/devs/display-image',
      text: 'display-image'
    }
  ]

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'bisque';
  }
}
