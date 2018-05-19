import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'calcinha',
  templateUrl: './calcinha.component.html',
  styleUrls: ['./calcinha.component.scss']
})
export class CalcinhaComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.readLimitByCategory('calcicha', 4)
      .then(response => this.products = response);
  }

}
