import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-block',
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.scss']
})
export class TitleBlockComponent {

  @Input('text') titleText: string;

  constructor() { }

}
