import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../../services/products.service';
import { ProductInterface } from '../../../../models/product.model';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  productId: string;
  product;
  options;
  categories;
  submitted = false;
  uploadingImg = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private storage: AngularFireStorage,
    private router: Router
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
        this.product = product;
      });

  }

  deletePhoto(photoUrl) {
    var index = this.product.photos.indexOf(photoUrl);
    this.product.photos.splice(index, 1);
  }

  uploadFile(event) {
    this.uploadingImg = true;
    const file = event.target.files[0];
    const filePath = `${new Date()}`;
    this.storage.upload(filePath, file)
      .then((data) => {
        this.uploadingImg = false;
        this.product.photos.push(data.downloadURL);
      })
  }


  updateProduct() {
    this.productsService.update(this.product, this.productId)
      .then((response) => {
        this.router.navigate(['/product', this.productId])
    });
  }

}
