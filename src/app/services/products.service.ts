import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreDocument, 
         AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ProductInterface } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class ProductsService {

  private productsCollection: AngularFirestoreCollection<ProductInterface>;
  products: Observable<ProductInterface[]>;
  
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  product: Observable<ProductInterface>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<ProductInterface>('products');
    this.products = this.productsCollection.valueChanges();
  }

  add(product: any) {
    return new Promise((resolve, reject) => {
      this.productsCollection.add(product)
        .then((response) => {
          resolve(response);
        });
    });
  }

  read(productId: string) {
    return new Promise((resolve, reject) => {
      this.afs.doc<ProductInterface>(`products/${productId}`)
        .valueChanges().subscribe((response) => {
          resolve(response);
        })
    });
  }

  update(product: ProductInterface, productId) {
    return new Promise((resolve, reject) => {
      this.afs.doc<ProductInterface>(`products/${productId}`).update(product)
        .then((response: any) => {
          resolve(response);
        });
    });
  }

  async readAll() {
    this.productsCollection = this.afs.collection<ProductInterface>('products');
    this.products = await this.productsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ProductInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.products;
  }

  async readByCategory(category, qty) {
    this.productsCollection = this.afs.collection<ProductInterface>('products',
      ref => ref.where('category', '==', category).where('available', '==', true).limit(qty));

    this.products = await this.productsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ProductInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.products;    
  }
  
}