import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { CartComponent } from './components/products/cart/cart.component';
import { CheckOutComponent } from './components/products/check-out/check-out.component';
import { ViewComponent } from './components/products/view/view.component';
import { WishlistComponent } from './components/products/wishlist/wishlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { HelpusComponent } from './components/auth/helpus/helpus.component';

const routes: Routes = [

  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home' ,component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'helpus', component:HelpusComponent},
  {path:'change-password', component:ChangePasswordComponent},
  {path:'products', children:[
    {path:'',component:ProductsComponent},
    {path:'cart', component:CartComponent},
    {path:'checkout', component:CheckOutComponent},
    {path:'view', component:ViewComponent},
    {path:'wishlist',component:WishlistComponent},
    

  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
