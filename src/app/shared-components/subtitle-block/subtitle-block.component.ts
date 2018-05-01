import { Component, Input } from '@angular/core';

@Component({
  selector: 'subtitle-block',
  templateUrl: './subtitle-block.component.html',
  styleUrls: ['./subtitle-block.component.scss']
})
export class SubtitleBlockComponent  {

  @Input('text') subtitle: string;

  constructor() { }

}
