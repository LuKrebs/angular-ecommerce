import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sapatinho-page',
  templateUrl: './sapatinho-page.component.html',
  styleUrls: ['./sapatinho-page.component.scss']
})
export class SapatinhoPageComponent implements OnInit {
  sapatinhoTitle = 'SAPATINHOS';
  
  constructor() { }

  ngOnInit() {
  }

}
