import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usercount;
  userAsCustomer;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserCount();
    this.getCustomerCount();
  }


  getUserCount()  {
    this.userService.getUserCount()
    .subscribe(data => {
      this.usercount = data;
    });
  }

  getCustomerCount() {
    this.userService.getUserCustomerTypeCount()
    .subscribe(data => {
      this.userAsCustomer = data;
    });
  }

}
