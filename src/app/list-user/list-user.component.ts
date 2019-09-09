import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { UserView } from '../model/userview.model';
 
@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  USER_NAME: string;
  user;
  userview: UserView[] = [];
  constructor(private router: Router, private userService: UserService) {  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
    });
  }

  // getUserView() {
  //   this.userService.getAllUserView()
  //   .subscribe(data = {
  //     console.log
  //   });
  // }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.USER_ID)
    .subscribe(data => {
      this.getAllUsers();
    });
  }

  updateUser(user: User) {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.USER_ID);
    this.router.navigate(['edit-user']);
  }

  Search() {
    if (this.USER_NAME !==  '') {
    } else if (this.USER_NAME === '') {
      this.ngOnInit();
    }
    this.users = this.users.filter(res => {
      return res.USER_NAME.toLowerCase().match(this.USER_NAME.toLowerCase());
    });

  }


}
