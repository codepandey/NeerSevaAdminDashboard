import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {User} from '../model/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  usertype;
  user: User;
  editForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    let USER_ID = localStorage.getItem('editUserId');
    if (!USER_ID) {
      alert('Invalid action');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      USER_ID: [],
      USER_NAME: ['', Validators.required],
      USER_CONTACT: ['', Validators.required],
      USER_EMAIL: ['', Validators.required],
      USER_ADDRESS_ID: ['', Validators.required],
      USER_TYPE_ID: ['', Validators.required],
      USER_IS_DELETED: ['', Validators.required],
      USER_IS_ACTIVE: ['', Validators.required],
      USER_DATE_CREATED: ['', Validators.required],
      USER_TYPE_NAME: ['', Validators.required]
    });
    this.userService.getUserById(+USER_ID)
    .subscribe(data => {
      this.editForm.setValue(data[0]);
    });
    this.userService.getAllUserTypes()
    .subscribe(data => {
      this.usertype = data;
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        });
  }



}





