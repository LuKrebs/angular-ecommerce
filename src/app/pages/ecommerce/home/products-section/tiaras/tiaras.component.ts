import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'tiaras',
  templateUrl: './tiaras.component.html',
  styleUrls: ['./tiaras.component.scss']
})
export class TiarasComponent implements OnInit {

  @Input('qty-to-show') qty: number;

  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    if (this.qty) {
      this.productsService.readLimitByCategory('tiara', this.qty)
        .then(response => this.products = response);
    }
    else {
      this.productsService.readAllByCategory('tiara')
        .then(response => this.products = response);      
    }
  }

}
