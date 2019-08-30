import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { UserType } from '../model/usertype.model';


@Component({
  selector: 'app-list-usertype',
  templateUrl: './list-usertype.component.html',
  styleUrls: ['./list-usertype.component.scss']
})
export class ListUsertypeComponent implements OnInit {

  usertypes;
  USER_TYPE_NAME;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsertypess();
  }

  getAllUsertypess(): void {
    this.userService.getAllUserTypes().subscribe(data => {
      this.usertypes = data;
    });
  }

  addUserType(): void {
    this.router.navigate(['add-usertype']);
  }

  deleteUserType(usertype: User) {
    this.userService.deleteUserType(usertype.USER_TYPE_ID)
      .subscribe(data => {
        this.getAllUsertypess();
      });
  }

  updateUserType(usertype: UserType) {
    localStorage.removeItem('editUsertypeId');
    localStorage.setItem('editUsertypeId', usertype.USER_TYPE_ID);
    this.router.navigate(['edit-usertype']);

  }

  Search() {
    if (this.USER_TYPE_NAME !==  '') {
    } else if (this.USER_TYPE_NAME === '') {
      this.ngOnInit();
    }
    this.usertypes = this.usertypes.filter(res => {
      return res.USER_NAME.toLowerCase().match(this.USER_TYPE_NAME.toLowerCase());
    });

  }



}
