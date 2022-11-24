import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  fetching: boolean = false;
  products:any[]= [];
  cartProducts: any[] = [];
  whishlistProducts: any[] = [];

  constructor(private productSrv:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productSrv.getProducts();
    this.productSrv.productsSub.subscribe(res=>{
      if(res.length !==0 ) {
        this.products = Object.assign([], res);
        this.fetching = false;
        console.log(this.products);
      }
    })
  }

  addProductToWishlist(product:any) {
    this.productSrv.addProductsToWishList(product);
  }

  addProductToShoppingCart(product:any) {
    this.productSrv.addProductToShoppingCart(product);
  }
}
