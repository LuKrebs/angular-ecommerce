import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'bico-de-pato',
  templateUrl: './bico-de-pato.component.html',
  styleUrls: ['./bico-de-pato.component.scss']
})
export class BicoDePatoComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.readByCategory('bico-de-pato')
      .then(response => this.products = response);
  }

}
