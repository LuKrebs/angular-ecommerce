import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/product.model';

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
  productModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.productModel = new Product();
  }

  ngOnInit() {
    this.options = this.productModel.options;
    this.categories = this.productModel.categories;

    this.productsService.read(this.productId)
      .then(product => {
        console.log(product);
        this.product = product;
      });
  }

}
