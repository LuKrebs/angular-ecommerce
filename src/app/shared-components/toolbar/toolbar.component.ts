import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toogledSidebar = new EventEmitter<any>();

  defaultAltImage = "Sonja Baby's | A beleza está nos detalhes";
  toolbarLogoImgSrc = 'assets/img/shared/logo.png';

  constructor() { }

  ngOnInit() { }

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
  }

}

