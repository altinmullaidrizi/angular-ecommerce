import {Component, OnInit} from '@angular/core';
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
  public categories: APIResponse<any>;
  // @ts-ignore
  private productSub: Subscription;
// @ts-ignore
  private categorySub: Subscription;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(category?: string): void {
    if (category) {
      this.productSub = this.httpService
        .getCategoryProducts(category)
        .subscribe((productsList: APIResponse<Product>) => {
          this.products = productsList;
        });
    } else {
      this.productSub = this.httpService
        .getProducts()
        .subscribe((productsList: APIResponse<Product>) => {
          this.products = productsList;
        });
    }
  }

  getCategories(): void {
    this.categorySub = this.httpService
      .getAllCategories()
      .subscribe((categoryList: APIResponse<any>) => {
        // this.categories = categoryList;
        console.log('categories', categoryList.results, typeof categoryList);
      });
  }
}
