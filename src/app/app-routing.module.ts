import { AddProductComponent } from './Components/admin/add-product/add-product.component';

import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { ProductsComponent } from './Components/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './Components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { AdminNotAccessService } from './Services/admin-not-access.service';

//, canActivate:[AuthGuardService]

const routes: Routes = [
  {path: 'products', component: ProductsComponent , canActivate:[AuthGuardService , AdminNotAccessService]},
  {path: '', component: ProductsComponent , canActivate:[AuthGuardService , AdminNotAccessService]},
  {path: 'orders', component: MyOrdersComponent , canActivate:[AuthGuardService , AdminNotAccessService]},
  {path: 'admin/products', component: AdminProductsComponent , canActivate:[AuthGuardService , AdminAuthGuardService]},
  {path: 'admin/orders', component: AdminOrdersComponent , canActivate:[AuthGuardService , AdminAuthGuardService]},
  {path: 'shopping', component: ShoppingCartComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin/addProducts', component: AddProductComponent},
  {path: 'admin/addProducts/:id', component: AddProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
