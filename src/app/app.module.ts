import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AdminComponent } from './admin/admin.component';
import { SalesComponent } from './sales/sales.component';
import { DeliveryComponent } from './delivery/delivery.component';
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
import { AuthenticationService } from './service/auth.service';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';
import { StockService } from './service/stock.service';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './service/item.service';
import { BrandService } from './service/brand.service';
import { ListUsertypeComponent } from './list-usertype/list-usertype.component';
import { AddUsertypeComponent } from './add-usertype/add-usertype.component';
import { EditUsertypeComponent } from './edit-usertype/edit-usertype.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ListShopComponent } from './list-shop/list-shop.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { ShopService } from './service/shop.service';
import { ListAddressComponent } from './list-address/list-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddressService } from './service/address.service';



@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddItemComponent,
    EditItemComponent,
    ListItemComponent,
    ListStockComponent,
    EditStockComponent,
    AddStockComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    AdminComponent,
    SalesComponent,
    DeliveryComponent,
    ListSaleComponent,
    ListDeliveryComponent,
    MyProfileComponent,
    ListOrderComponent,
    ListPaymentComponent,
    OrderDetailComponent,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    AddBrandComponent,
    EditBrandComponent,
    ListBrandComponent,
    ImageApprovalComponent,
    ListUsertypeComponent,
    AddUsertypeComponent,
    EditUsertypeComponent,
    AddShopComponent,
    ListShopComponent,
    EditShopComponent,
    ListAddressComponent,
    AddAddressComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    VendorService,
    ProductService,
    StockService,
    CustomerService,
    ItemService,
    BrandService,
    ShopService,
    AddressService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
