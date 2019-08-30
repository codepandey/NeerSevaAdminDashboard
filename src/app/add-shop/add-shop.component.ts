import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private shopService: ShopService
  ) { }



  ngOnInit() {
    this.addForm = this.formBuilder.group({
        SHOP_NAME: ['', Validators.required],
        SHOP_TYPE: ['', Validators.required],
        SHOP_BRANCH: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.shopService.addShop(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['list-shop']);
        });
    }
  }


  get f() { return this.addForm.controls; }

}
