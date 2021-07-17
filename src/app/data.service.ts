import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public products: any;
  constructor() { }

  // tslint:disable-next-line:typedef
  getPosts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json;
      });
  }
}
