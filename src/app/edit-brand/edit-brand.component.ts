import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { BrandService } from '../service/brand.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss']
})
export class EditBrandComponent implements OnInit {

    brands;
    item: Item;
    editForm: FormGroup;
    submitted = false;


    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private itemService: ItemService,
      private brandService: BrandService
      ) { }

    ngOnInit() {
      const BRAND_ID = localStorage.getItem('editBrandId');
      if (!BRAND_ID) {
        alert('Invalid action.');
        this.router.navigate(['list-item']);
        return;
      }
      this.editForm = this.formBuilder.group({
        BRAND_ID: [],
        BRAND_NAME: ['', Validators.required],
        BRAND_IMAGE_ID: ['', Validators.required],
        BRAND_DATE_CREATED: ['', Validators.required],
        BRAND_CREATED_BY_USER: ['', Validators.required],
        BRAND_IS_DELETED: ['', Validators.required]
      });
      this.brandService.getBrandById(+BRAND_ID)
      .subscribe(data => {
        this.editForm.setValue(data[0]);
      });
    }



    get f() { return this.editForm.controls; }

    onSubmit() {
      this.brandService.updateBrand(this.editForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['list-brand']);
          },
          error => {
            alert(error);
          });
    }




}
