import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'tiaras',
  templateUrl: './tiaras.component.html',
  styleUrls: ['./tiaras.component.scss']
})
export class TiarasComponent implements OnInit {

  tiaras;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.readByCategory('Tiara').then((response) => {
      this.tiaras = response;
      console.log(response); 
    });
  }

}
