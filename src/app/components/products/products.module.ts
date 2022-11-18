import { ProductsComponent } from './products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ViewComponent,
    WishlistComponent,
    CartComponent,
    CheckOutComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
