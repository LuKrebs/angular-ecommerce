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
  defaultAltImage = "Sonja Baby's | A beleza está nos detalhes";
  purchaseDetails;
  purchaseTotalAmount = 0;

  constructor(
    private productService: ProductsService,
  ) { 
    this.cartAsObject = {};
    this.purchaseDetails = {};
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
        product.cartQty = parseInt(this.cartAsObject[productId]);
        product.showMaxQtyMessage = false;
        this.purchaseTotalAmount += (parseInt(product.cartQty) * product.price);
        this.cartProducts.push(product);
      });
    });
    
  }

  ngOnInit() {
  }

  addQty(product) {
    if (product.cartQty < product.qty) return product.cartQty += 1;
    else return product.showMaxQtyMessage = true;
  }

  removeQty(product) {
    if (product.cartQty == 0) return product.cartQty = 0;
    return product.cartQty -= 1;
  }

  getFormattedValue(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

}
