import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/neerseva/stocks';

  getAllStocks() {
    return this.http.get<Stock[]>(this.baseUrl);
  }


  getStockById(STOCK_ID: any) {
    return this.http.get<Stock>(this.baseUrl + '/' + STOCK_ID);
  }


  addStock(stock: Stock) {
    return this.http.post(this.baseUrl, stock);
  }

  updateStock(stock: Stock) {
    return this.http.put(this.baseUrl  + '/' + stock.STOCK_ID, stock);
  }

  deleteStock(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }


}
