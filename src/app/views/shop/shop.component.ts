import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public products: any;

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json;
      });
  }
}
