import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Lightbox } from 'angular2-lightbox';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  qty = 0;
  showMaxQtyMessage = false;
  cart: any;
  finalCartAsString: string;

  crossSellingText = 'Quem viu este produto também comprou:'

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServices: ProductsService,
    private _lightbox: Lightbox,
    private _flashMessagesService: FlashMessagesService,
  ) { 
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this._albums = [];
    this.finalCartAsString = '';
    this.cart = {};
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

  addQty() {
    if (this.qty < this.product.qty) return this.qty += 1;
    else return this.showMaxQtyMessage = true;
  }

  removeQty() {
    if (this.qty == 0) return this.qty = 0;
    return this.qty -= 1;
  }

  async addToCart() {

    if (this.qty > 0) {
      var cart = localStorage.getItem('cart');
      if (cart) {
        if (cart.includes(`${this.productId}`)) {
          var cartAsArray = cart.split('?');

          await cartAsArray.map(item => {
            if (item !== "") {
              var tmp = item.split('-');
              if (tmp[0] == this.productId) this.cart[tmp[0]] = this.qty;
                
              else this.cart[tmp[0]] = tmp[1];
            }
          });

          await this.transformCartIntoString(this.cart);
        
        }
        else {
          cart = cart.concat(`?${this.productId}-${this.qty}`);
          localStorage.setItem('cart', cart);
        }
      } else localStorage.setItem('cart', `?${this.productId}-${this.qty}`);

      this._flashMessagesService.show('Produto adicionado! :)', {
        cssClass: 'alert alert-success fixed-flash-message', timeout: 4000
      });
    }
  }

  transformCartIntoString(cart) {
    var cartAsString = "";
    Object.keys(cart).forEach(function (key) {
      cartAsString += (`?${key}-${cart[key]}`);
    });
    localStorage.setItem('cart', cartAsString);
  }

}
