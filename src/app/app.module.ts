import { ProductsModule } from './components/products/products.module';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HistoryComponent } from './components/orders/history/history.component';
import { AuthModule } from './components/auth/auth.module';
import { OrdersModule } from './components/orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    

    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AuthModule,
    OrdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
