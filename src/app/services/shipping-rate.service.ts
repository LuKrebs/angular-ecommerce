import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ShippingRateService {
  
  constructor(
    private http: Http
  ) { }

  getShippingRate() {
    return new Promise((resolve, reject) => {
      this.http.get('https://guarded-bastion-13255.herokuapp.com/api/correios')
        .subscribe(data => {
          resolve(data);
        })
    });
  }

}
