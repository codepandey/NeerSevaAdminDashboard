import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {UserType} from '../model/usertype.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-usertype',
  templateUrl: './edit-usertype.component.html',
  styleUrls: ['./edit-usertype.component.scss']
})
export class EditUsertypeComponent implements OnInit {
  usertypes;
  usertype: UserType;
  editForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    let USER_TYPE_ID = localStorage.getItem('editUsertypeId');
    if (!USER_TYPE_ID) {
      alert('Invalid action');
      this.router.navigate(['list-usertype']);
      return;
    }
    this.editForm = this.formBuilder.group({
      USER_TYPE_ID: [],
      USER_TYPE_NAME: ['', Validators.required],
      USER_TYPE_ROLE: ['', Validators.required],
      USER_TYPE_PERMISSION: ['', Validators.required]
    });
    this.userService.getUserTypeById(+USER_TYPE_ID)
    .subscribe(data => {
      this.editForm.setValue(data[0]);
    });
    this.userService.getAllUserTypes()
    .subscribe(data => {
      this.usertypes = data;
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.userService.updateUserType(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-usertype']);
        },
        error => {
          alert(error);
        });
  }

}
