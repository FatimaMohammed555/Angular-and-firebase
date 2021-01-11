import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Components/admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { LoginComponent } from './Components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuardService } from './Services/auth-guard.service';
import { UserLoginService } from './Services/user-login.service';
import { UserService } from './Services/user.service';
import { AdminNotAccessService } from './Services/admin-not-access.service';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ProductCardComponent } from './Components/product-card/product-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
    AddProductComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    DataTablesModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthGuardService,
    UserLoginService,
    UserService,
    AdminAuthGuardService,
    AdminNotAccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
