import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  products: any;

  constructor(
    private productsService: ProductsService
  ) {}

  async ngOnInit() {
    this.products = await this.productsService.readAll();
  }

  getFormattedValue(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

}
