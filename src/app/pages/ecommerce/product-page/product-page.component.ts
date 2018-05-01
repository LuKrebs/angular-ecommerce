import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: any;
  productId: string;
  imgSrc: any;
  _albums: Array<any>;

  crossSellingText = 'Quem viu este produto também comprou:'

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServices: ProductsService,
    private _lightbox: Lightbox,
  ) { 
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this._albums = [];
  }
  
  ngOnInit() {
    this.productsServices.read(this.productId)
      .then((product: any) => {
        this.product = product;
        this.product.photos.map(photo => this._albums.push({ src: photo }) );
    });
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  getFormattedValue(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

}
