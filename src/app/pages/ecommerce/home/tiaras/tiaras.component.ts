import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'tiaras',
  templateUrl: './tiaras.component.html',
  styleUrls: ['./tiaras.component.scss']
})
export class TiarasComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.readByCategory('tiara')
      .then(response => this.products = response);
  }

}
