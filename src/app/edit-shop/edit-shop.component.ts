import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import { ShopService } from '../service/shop.service';
import { Shop } from '../model/shop.model';


@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

    editForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private shopService: ShopService) { }

    ngOnInit() {
      const SHOP_ID = localStorage.getItem('editShopId');
      if (!SHOP_ID) {
        alert('Invalid action.');
        this.router.navigate(['list-shop']);
        return;
      }
      this.editForm = this.formBuilder.group({
        SHOP_ID: [],
        SHOP_NAME: ['', Validators.required],
        SHOP_IMAGE_ID: ['', Validators.required],
        SHOP_TYPE: ['', Validators.required],
        SHOP_ADDRESS_ID: ['', Validators.required],
        SHOP_CODE: ['', Validators.required],
        SHOP_BRANCH: ['', Validators.required]
      });
      this.shopService.getShopById(+SHOP_ID)
        .subscribe(data => {
        this.editForm.setValue(data[0]);
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.shopService.updateShop(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-shop']);
        },
        error => {
          alert(error);
        });
  }



}
