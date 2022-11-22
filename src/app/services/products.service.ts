

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl:string  = 'https://fakestoreapi.com/products';

  public whishlistProducts:any[] =[];
  public cartProducts:any[] =[];
  public products:any[] =[];

  public productsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public productsRetreived: boolean = false;

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get(this.productUrl).subscribe(
      (res) => {
        this.productsSub.next(Object.assign([], res))
        this.productsRetreived = true
      }
    )

    }
  }
