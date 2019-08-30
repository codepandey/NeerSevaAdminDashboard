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
    this.userService.getUserCount()
    .subscribe(data => {
      this.usercount = data;
    });
    this.userService.getUserCustomerTypeCount()
    .subscribe(data => {
      this.userAsCustomer = data;
    });
  }

}
