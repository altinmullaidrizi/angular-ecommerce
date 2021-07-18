import { Component, OnInit } from '@angular/core';
import {APIResponse, Product} from '../../models';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  // @ts-ignore
  public products: APIResponse<Product>;
  // @ts-ignore
  private productSub: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSub = this.httpService
      .getProducts()
      .subscribe((productsList: APIResponse<Product>) => {
        this.products = productsList;
      });
  }
}
