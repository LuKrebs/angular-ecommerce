import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {
  @Output() toogledSidebar = new EventEmitter<any>();

  logoSrc = 'assets/img/shared/logo.png';
  defaultAltImage = "Sonja Baby's | A beleza está nos detalhes";

  constructor() { }

  ngOnInit() { }

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
  }
}
