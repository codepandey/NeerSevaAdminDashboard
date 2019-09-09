import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { AdminComponent } from './admin/admin.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { ListDeliveryComponent } from './list-delivery/list-delivery.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { ListBrandComponent } from './list-brand/list-brand.component';
import { ImageApprovalComponent } from './image-approval/image-approval.component';
import { AddUsertypeComponent } from './add-usertype/add-usertype.component';
import { EditUsertypeComponent } from './edit-usertype/edit-usertype.component';
import { ListUsertypeComponent } from './list-usertype/list-usertype.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { ListShopComponent } from './list-shop/list-shop.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddBrandimageComponent } from './add-brandimage/add-brandimage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vendor',
    component: VendorComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'add-shop',
    component: AddShopComponent
  },
  {
    path: 'add-brandimage',
    component: AddBrandimageComponent
  },
  {
    path: 'edit-shop',
    component: EditShopComponent
  },
  {
    path: 'list-shop',
    component: ListShopComponent
  },
  {
    path: 'add-address',
    component: AddAddressComponent
  },
  {
    path: 'edit-address',
    component: EditAddressComponent
  },
  {
    path: 'list-address',
    component: ListAddressComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  },
  {
    path: 'edit-item',
    component: EditItemComponent
  },
  {
    path: 'list-item',
    component: ListItemComponent
  },
  {
    path: 'add-stock',
    component: AddStockComponent
  },
  {
    path: 'edit-stock',
    component: EditStockComponent
  },
  {
    path: 'list-stock',
    component: ListStockComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent
  },
  {
    path: 'add-usertype',
    component: AddUsertypeComponent
  },
  {
    path: 'edit-usertype',
    component: EditUsertypeComponent
  },
  {
    path: 'list-usertype',
    component: ListUsertypeComponent
  },
  {
    path: 'list-sale',
    component: ListSaleComponent
  },
  {
    path: 'list-delivery',
    component: ListDeliveryComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'list-order',
    component: ListOrderComponent
  },
  {
    path: 'list-payment',
    component: ListPaymentComponent
  },
  {
    path: 'order-detail',
    component: OrderDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'add-brand',
    component: AddBrandComponent
  },
  {
    path: 'edit-brand',
    component: EditBrandComponent
  },
  {
    path: 'list-brand',
    component: ListBrandComponent
  },
  {
    path: 'image-approval',
    component: ImageApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
