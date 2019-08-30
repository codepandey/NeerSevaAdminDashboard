import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';
import { Router } from '@angular/router';
import { Shop } from '../model/shop.model';

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.scss']
})
export class ListShopComponent implements OnInit {

  shops;
  SHOP_NAME: string;
  constructor(private router: Router, private shopService: ShopService) { }


  ngOnInit() {
    this.getAllShops();
  }

  getAllShops(): void {
    this.shopService.getAllShops().subscribe(data => {
      this.shops = data;
    });
  }

  addShop(): void {
    this.router.navigate(['add-shop']);
  }

  deleteShop(shop: Shop) {
    this.shopService.deleteShop(shop.SHOP_ID)
    .subscribe(data => {
      this.getAllShops();
    });
  }

  updateShop(shop: Shop) {
    localStorage.removeItem('editShopId');
    localStorage.setItem('editShopId', shop.SHOP_ID);
    this.router.navigate(['edit-shop']);
  }

  Search() {
    if (this.SHOP_NAME !==  '') {
    } else if (this.SHOP_NAME === '') {
      this.ngOnInit();
    }
    this.shops = this.shops.filter(res => {
      return res.SHOP_NAME.toLowerCase().match(this.SHOP_NAME.toLowerCase());
    });

  }

}
