import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{


  constructor(public productSrv:ProductsService,public db:ProductsService, public Router:Router ){

  }

  ngOnInit(): void {
    
  }

  removeProductFromWhishlist(prdIdx:number) {
    let elements = this.db.wishlistProducts.splice(prdIdx, 1);
    console.log(elements[0]['title'], "Product Removed from Whishlist");
  }

  addProductToShoppingCart(prd:any, removeBool:boolean, prdIdx:number) {
    this.db.addProductToShoppingCart(prd, removeBool, prdIdx);
    this.removeProductFromWhishlist(prdIdx);
  }

}
