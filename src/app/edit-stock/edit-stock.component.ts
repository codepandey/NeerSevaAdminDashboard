import { Component, OnInit } from '@angular/core';
import {StockService} from '../service/stock.service';
import {Router} from '@angular/router';
import {Stock} from '../model/stock.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';


@Component({
  selector: 'edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {

    stock: Stock;
    editForm: FormGroup;
    submitted = false;


    constructor(private formBuilder: FormBuilder, private router: Router, private stockService: StockService) { }

    ngOnInit() {
      const STOCK_ID = localStorage.getItem('editStockId');
      if (!STOCK_ID) {
        alert('Invalid action.');
        this.router.navigate(['list-stock']);
        return;
      }
      this.editForm = this.formBuilder.group({
        STOCK_ID: [],
        STOCK_QUANTITY: ['', Validators.required],
        STOCK_ITEM_ID: ['', Validators.required],
        STOCK_DATE_CREATED: ['', Validators.required],
        STOCK_CREATED_BY_USER: ['', Validators.required],
        STOCK_IS_AVAILABLE: ['', Validators.required],
        STOCK_IS_DELETED: ['', Validators.required]
      });
      this.stockService.getStockById(+STOCK_ID)
    .subscribe(data => {
      this.editForm.setValue(data[0]);
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.stockService.updateStock(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-stock']);
        },
        error => {
          alert(error);
        });
  }



}
