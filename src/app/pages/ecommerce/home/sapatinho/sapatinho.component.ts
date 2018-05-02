import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'sapatinho',
  templateUrl: './sapatinho.component.html',
  styleUrls: ['./sapatinho.component.scss']
})
export class SapatinhoComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.readByCategory('sapatinho')
      .then(response => this.products = response);
  }

}
