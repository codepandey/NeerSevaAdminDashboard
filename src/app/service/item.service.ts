import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../model/item.model';
import { Brand } from '../model/brand.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/neerseva/';

  getAllItems() {
    return this.http.get<Item[]>(this.baseUrl + 'items');
  }


  getItemById(ITEM_ID: any) {
    return this.http.get<Item>(this.baseUrl + 'items' + '/' + ITEM_ID);
  }

  getItemsByBrandName(BRAND_NAME: string)  {
    return this.http.get<Item>(this.baseUrl + 'itemsByBrandName' + '/' + BRAND_NAME);
  }



  addItem(item: Item) {
    return this.http.post(this.baseUrl + 'items', item);
  }

  updateItem(item: Item) {
    return this.http.put(this.baseUrl + 'items'  + '/' + item.ITEM_ID, item);
  }

  deleteItem(ITEM_ID: string) {
    return this.http.delete(this.baseUrl + 'items' + '/' + ITEM_ID);
  }


}
