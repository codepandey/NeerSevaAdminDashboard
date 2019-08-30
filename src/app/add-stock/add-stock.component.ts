import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../service/stock.service';
import { Router } from '@angular/router';
import { BrandService } from '../service/brand.service';
import { ItemService } from '../service/item.service';



@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  items;
  brands;
  addForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stockService: StockService,
    private brandService: BrandService,
    private itemService: ItemService
  ) { }


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      STOCK_QUANTITY: ['', Validators.required],
      STOCK_ITEM_ID: ['', Validators.required],
      BRAND_ID: ['', Validators.required],
      ITEM_ID: ['', Validators.required]

    });
    this.brandService.getAllBrands()
      .subscribe(data => {
        this.brands = data;
      });
    this.itemService.getAllItems()
      .subscribe(data => {
        this.items = data;
      });


    // this.itemService.getItemById()
    // .subscribe(data => {
    //   this.items = data;
    // });

  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.stockService.addStock(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['list-stock']);
        });
    }
  }


  get f() { return this.addForm.controls; }
}
