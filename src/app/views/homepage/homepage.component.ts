import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public dataService: any;
  public data: any;
  public products: any;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(json => {
        this.products = json;
      });
  }
}
