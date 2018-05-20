import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ShippingRateService } from '../../../services/shipping-rate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  defaultAltImage = "Sonja Baby's | A beleza está nos detalhes";
  cartAsString;
  cartAsArray;
  cartAsObject: any;
  cartProducts: any[];
  purchaseDetails;
  purchaseTotalAmount = 0;
  cartHasItens: boolean;

  constructor(
    private productService: ProductsService,
    private shippingRateService: ShippingRateService
  ) { 
    this.cartHasItens = false;
    this.cartAsObject = {};
    this.purchaseDetails = {};
    this.cartProducts = [];
    this.cartAsString = localStorage.getItem('cart');
    this.cartAsArray = this.cartAsString.split('?');

    this.cartAsArray.map(item => {
      if (item !== "") {
        var tmp = item.split('-');
        if ( parseInt(tmp[1]) > 0 ) {
          this.cartHasItens = true;
          this.cartAsObject[tmp[0]] = parseInt(tmp[1]);
        }
      }
    });

    Object.keys(this.cartAsObject).forEach(productId => {
      this.productService.read(productId).then((product: any) => {
        product.cartQty = parseInt(this.cartAsObject[productId]);
        product.qty = parseInt(product.qty);
        product.showMaxQtyMessage = false;
        product.id = productId;
        this.purchaseTotalAmount += (parseInt(product.cartQty) * product.price);
        this.cartProducts.push(product);
      });
    });
    
  }

  ngOnInit() {
    this.shippingRateService.getShippingRate()
      .then((data) => console.log(data));
  }

  addQty(product) {
    if (product.cartQty < product.qty) {
      product.showMaxQtyMessage = false;
      product.cartQty += 1;
      this.cartAsObject[product.id] = product.cartQty;
      this.calculateTotalValue();
      this.transformCartIntoString(this.cartAsObject);
    } 
    else {
      product.showMaxQtyMessage = true;
    }  
  }

  removeQty(product) {
    product.showMaxQtyMessage = false;
    if (product.cartQty == 0) {
      product.cartQty = 0;
      
    } else {
      product.cartQty -= 1
      this.cartAsObject[product.id] = product.cartQty;
      this.calculateTotalValue();
      this.transformCartIntoString(this.cartAsObject);
    } 
  }

  getFormattedValue(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  transformCartIntoString(cart) {
    var cartAsString = "";
    Object.keys(cart).forEach((key) => {
      cartAsString += (`?${key}-${cart[key]}`);
    });
    localStorage.setItem('cart', cartAsString);
  }

  calculateTotalValue() {
    this.purchaseTotalAmount = 0;
    Object.values(this.cartProducts).forEach((product: any) => {
      this.purchaseTotalAmount += (parseInt(product.cartQty) * product.price);
    });
  }

}
