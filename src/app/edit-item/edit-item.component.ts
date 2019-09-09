import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { BrandService } from '../service/brand.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
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
      const ITEM_ID = localStorage.getItem('editItemId');
      if (!ITEM_ID) {
        alert('Invalid action.');
        this.router.navigate(['list-item']);
        return;
      }
      this.editForm = this.formBuilder.group({
        ITEM_ID: ['', Validators.required],
        ITEM_NAME: ['', Validators.required],
        ITEM_CODE: ['', Validators.required],
        ITEM_PRICE: ['', Validators.required],
        ITEM_MRP: ['', Validators.required],
        ITEM_DISP_PRICE: ['', Validators.required],
        ITEM_DISCOUNT: ['', Validators.required],
        ITEM_TYPE: ['', Validators.required],
        ITEM_DESCRIPTION: ['', Validators.required],
        ITEM_CAPACITY: ['', Validators.required],
        BRAND_NAME: ['', Validators.required],
        ITEM_IMAGE_ID: ['', Validators.required],
        ITEM_CREATED_BY_USER: ['', Validators.required],
        ITEM_IS_DELETED: ['', Validators.required],
        ITEM_DATE_CREATED: ['', Validators.required],
        ITEM_TAX: ['', Validators.required],
      });
      this.itemService.getItemById(+ITEM_ID)
      .subscribe(data => {
        this.editForm.setValue(data[0]);
      });

      this.brandService.getAllBrands()
      .subscribe(data => {
        this.brands = data;
  });
    }

    capacity =  [
      {id: 1, capcityName: '1'},
      {id: 2, capcityName: '2'},
      {id: 3, capcityName: '5'},
      {id: 4, capcityName: '20'}
    ];

    get f() { return this.editForm.controls; }

    onSubmit() {
      this.itemService.updateItem(this.editForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['list-item']);
          },
          error => {
            alert(error);
          });
    }






}
