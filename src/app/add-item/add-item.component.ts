import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ItemService } from '../service/item.service';
import { BrandService } from '../service/brand.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  brands;
  addForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private brandService: BrandService
    ) { }

    capacity =  [
      {id: 1, capcityName: '1/2'},
      {id: 2, capcityName: '1'},
      {id: 3, capcityName: '2'},
      {id: 4, capcityName: '5'},
      {id: 5, capcityName: '20'}
    ];

  ngOnInit() {
    this.addForm = this.formBuilder.group({
        ITEM_NAME: ['', Validators.required],
        ITEM_CODE: ['', Validators.required],
        ITEM_PRICE: ['', Validators.required],
        ITEM_MRP: ['', Validators.required],
        ITEM_DISP_PRICE: ['', Validators.required],
        ITEM_DISCOUNT: ['', Validators.required],
        ITEM_TYPE: ['', Validators.required],
        ITEM_DESCRIPTION: ['', Validators.required],
        ITEM_CAPACITY: ['', Validators.required],
        ITEM_BRAND: ['', Validators.required],
        ITEM_TAX: ['', Validators.required]
    });
    this.brandService.getAllBrands()
      .subscribe(data => {
        this.brands = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.itemService.addItem(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-item']);
      });
    }
  }

  get f() { return this.addForm.controls; }


}
