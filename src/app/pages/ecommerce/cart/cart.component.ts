import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartAsString;
  cartAsArray;
  cartAsObject: any;
  cartProducts: any[];

  constructor(
    private productService: ProductsService,
  ) { 
    this.cartAsObject = {};
    this.cartProducts = [];
    this.cartAsString = localStorage.getItem('cart');
    this.cartAsArray = this.cartAsString.split('?');

    this.cartAsArray.map(item => {
      if (item !== "") {
        var tmp = item.split('-');
        this.cartAsObject[tmp[0]] = tmp[1];
      }
    });

    Object.keys(this.cartAsObject).forEach(productId => {
      this.productService.read(productId).then((product: any) => {
        product.cartQty = this.cartAsObject[productId];
        this.cartProducts.push(product);
      });

    });
    
    console.log(this.cartProducts);
  }

  ngOnInit() {
  }

}
