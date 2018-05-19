import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'sapatinho',
  templateUrl: './sapatinho.component.html',
  styleUrls: ['./sapatinho.component.scss']
})
export class SapatinhoComponent implements OnInit {
  @Input('qty-to-show') qty: number;
  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    if (this.qty) {
      this.productsService.readLimitByCategory('sapatinho', this.qty)
        .then(response => this.products = response);
    } else {
      this.productsService.readAllByCategory('sapatinho')
        .then(response => this.products = response);      
    }
  }

}
