import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebarElement$: any;

  constructor() { }

  ngOnInit() { }

  onToogleSidebar(data) {
    this.sidebarElement$.toggle();
  }

}
