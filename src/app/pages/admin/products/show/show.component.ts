import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  productId: string;
  product;
  options;
  categories;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.options = ['Sim', 'Não'];
    this.categories = [
      'Tiara',
      'Calcinha',
      'Gravata',
      'Bico de pato'
    ]
  }

  ngOnInit() {
    this.productsService.read(this.productId)
      .then(product => {
        console.log(product);
        this.product = product;
      });
  }

}
