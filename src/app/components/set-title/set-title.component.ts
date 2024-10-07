import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-set-title',
  standalone: true,
  imports: [],
  templateUrl: './set-title.component.html',
  styleUrls: ['./set-title.component.css']
})
export class SetTitleComponent  implements OnInit {
  titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle("Cop title");
  }
}
