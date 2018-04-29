import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {
  @Output() toogledSidebar = new EventEmitter<any>();

  logoSrc = 'assets/img/shared/logo-mama-hostel.png';
  defaultAltImage = 'Mama Brasil Hostel';

  constructor() { }

  ngOnInit() { }

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
  }
}
