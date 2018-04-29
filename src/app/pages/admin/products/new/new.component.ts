import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from '../../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newProduct: any;
  options;
  categories;
  defaultAltImage = "Sonja Baby's | A beleza está nos detalhes";
  submitted = false;
  uploadingImg = false;

  constructor(
    private storage: AngularFireStorage,
    private productsService: ProductsService,
    private router: Router
  ) { 
    this.newProduct = { 
      name: '',
      available: '',
      category: '',
      price: '',
      qty: '',
      photos: []
    };
  }

  ngOnInit() {
    this.options = ['Sim', 'Não'];
    this.categories = [
      'Tiara',
      'Calcinha',
      'Gravata',
      'Bico de pato'
    ]
  }

  onSubmit() { 
    this.submitted = true;
    this.productsService.add(this.newProduct)
      .then((response: any) => {
        console.log(response);
        this.router.navigate(['/product', response.id])
    })
  }

  uploadFile(event) {
    this.uploadingImg = true;
    const file = event.target.files[0];
    const filePath = `${new Date()}`;
    this.storage.upload(filePath, file)
      .then((data) => {
        console.log(data);
        this.uploadingImg = false;
        this.newProduct.photos.push(data.downloadURL);
      })
      .catch(err => console.log(err));
  }
}
