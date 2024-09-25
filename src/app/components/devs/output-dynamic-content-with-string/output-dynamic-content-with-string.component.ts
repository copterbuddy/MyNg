import { Component } from '@angular/core';

@Component({
  selector: 'app-output-dynamic-content-with-string',
  standalone: true,
  imports: [],
  templateUrl: './output-dynamic-content-with-string.component.html',
  styleUrls: ['./output-dynamic-content-with-string.component.css']
})
export class OutputDynamicContentWithStringComponent {
  text = "my dynamic text"
}
