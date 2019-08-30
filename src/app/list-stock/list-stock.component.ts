import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StockService} from '../service/stock.service';
import {Stock} from '../model/stock.model';


@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent implements OnInit {

  stocks: Stock[];
  STOCK_ITEM_ID: string;
  constructor(private router: Router, private stockService: StockService) { }


  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks(): void {
    this.stockService.getAllStocks().subscribe(data => {
      this.stocks = data;
    });
  }

  addStock(): void {
    this.router.navigate(['add-stock']);
  }

  deleteStock(stock: Stock) {
    this.stockService.deleteStock(stock.STOCK_ID)
    .subscribe(data => {
      this.getAllStocks();
    });
  }

  updateStock(stock: Stock) {
    localStorage.removeItem('editStockId');
    localStorage.setItem('editStockId', stock.STOCK_ID);
    this.router.navigate(['edit-stock']);
  }

  Search() {
    if (this.STOCK_ITEM_ID !==  '') {
    } else if (this.STOCK_ITEM_ID === '') {
      this.ngOnInit();
    }
    this.stocks = this.stocks.filter(res => {
      return res.STOCK_ITEM_ID.toLowerCase().match(this.STOCK_ITEM_ID.toLowerCase());
    });

  }

}
