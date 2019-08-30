import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  items: Item[] = [];
  ITEM_NAME;


  constructor(
    private router: Router,
    private itemService: ItemService
    ) {  }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem(): void {
    this.router.navigate(['add-item']);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.ITEM_ID)
    .subscribe(data => {
      this.getAllItems();
    });
  }

  updateItem(item: Item){
    localStorage.removeItem('editItemId');
    localStorage.setItem('editItemId', item.ITEM_ID);
    this.router.navigate(['edit-item']);
  }

  Search() {
    if (this.ITEM_NAME !==  '') {
    } else if (this.ITEM_NAME === '') {
      this.ngOnInit();
    }
    this.items = this.items.filter(res => {
      return res.ITEM_NAME.toLowerCase().match(this.ITEM_NAME.toLowerCase());
    });

  }



}
