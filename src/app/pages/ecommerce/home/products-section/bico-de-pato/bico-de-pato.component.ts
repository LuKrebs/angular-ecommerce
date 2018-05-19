import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'bico-de-pato',
  templateUrl: './bico-de-pato.component.html',
  styleUrls: ['./bico-de-pato.component.scss']
})
export class BicoDePatoComponent implements OnInit {
  @Input('qty-to-show') qty: number;
  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    if (this.qty) {
      this.productsService.readLimitByCategory('bico-de-pato', this.qty)
        .then(response => this.products = response);
    } else {
      this.productsService.readAllByCategory('tiara')
        .then(response => this.products = response);      
    }
  }

}
