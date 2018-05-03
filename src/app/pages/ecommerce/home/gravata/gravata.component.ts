import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'gravata',
  templateUrl: './gravata.component.html',
  styleUrls: ['./gravata.component.scss']
})
export class GravataComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.readByCategory('gravata')
      .then(response => this.products = response);
  }

}
