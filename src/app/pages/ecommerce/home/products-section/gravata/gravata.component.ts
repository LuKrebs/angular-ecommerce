import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'gravata',
  templateUrl: './gravata.component.html',
  styleUrls: ['./gravata.component.scss']
})
export class GravataComponent implements OnInit {
  @Input('qty-to-show') qty: number;
  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    if (this.qty) {
      this.productsService.readLimitByCategory('gravata', this.qty)
        .then(response => this.products = response);
    } else {
      this.productsService.readAllByCategory('gravata')
        .then(response => this.products = response);
    }
  }

}
