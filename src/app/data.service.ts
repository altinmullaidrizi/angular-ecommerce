import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public products: any;
  public product: any;
  constructor() { }

  // tslint:disable-next-line:typedef
  getPosts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json;
      });
  }
  getProduct(id: number): any {
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res => res.json())
      .then(json => {
        const product = json;
        this.product = product;
        console.log('11', this.product);
        return product;
      });
  }
}
