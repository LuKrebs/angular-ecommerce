import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiaraTitle = 'TIARAS';
  bicoDePatoTitle = 'BICO DE PATO'
  calcinhaTitle = 'CALCINHAS';
  sapatinhoTitle = 'SAPATINHOS';
  gravataTitle = 'GRAVATAS';

  constructor() { }

  ngOnInit() {
  }

}
