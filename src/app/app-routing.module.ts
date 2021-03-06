import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent },
    {path: 'products', component: ProductsComponent },
    {path: 'shopping-cart', component: ShoppingCartComponent },
    {path: 'login', component: LoginComponent },

    {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
    {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

    {
      path: 'admin/products',
      component: AdminProductsComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/orders',
      component: AdminOrdersComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },

  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
