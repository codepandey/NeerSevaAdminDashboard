import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../model/address.model';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {

  addresses;

  constructor(private router: Router, private addressService: AddressService) { }


  ngOnInit() {
    this.getAllAddresses();
  }

  getAllAddresses(): void {
    this.addressService.getAllAddresses().subscribe(data => {
      this.addresses = data;
    });
  }

  addAddress(): void {
    this.router.navigate(['add-address']);
  }

  deleteAddress(address: Address) {
    this.addressService.deleteAddress(address.ADDRESS_ID)
    .subscribe(data => {
      this.getAllAddresses();
    });
  }

  updateAddress(address: Address) {
    localStorage.removeItem('editShopId');
    localStorage.setItem('editShopId', address.ADDRESS_ID);
    this.router.navigate(['edit-shop']);
  }

  // Search() {
  //   if (this.SHOP_NAME !==  '') {
  //   } else if (this.SHOP_NAME === '') {
  //     this.ngOnInit();
  //   }
  //   this.shops = this.shops.filter(res => {
  //     return res.SHOP_NAME.toLowerCase().match(this.SHOP_NAME.toLowerCase());
  //   });
  // }


}
