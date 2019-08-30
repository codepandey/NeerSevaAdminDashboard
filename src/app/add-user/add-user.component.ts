import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  usertype;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }



  ngOnInit() {
    this.addForm = this.formBuilder.group({
      USER_TYPE_ID: ['', Validators.required],
      USER_NAME: ['', Validators.required],
      USER_CONTACT: ['', Validators.required],
      USER_EMAIL: ['', Validators.required],
    });
    this.userService.getAllUserTypes()
      .subscribe(data => {
        this.usertype = data;
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.userService.addUser(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['list-user']);
        });
    }
  }


  get f() { return this.addForm.controls; }


}
