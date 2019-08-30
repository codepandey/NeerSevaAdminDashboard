import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-usertype',
  templateUrl: './add-usertype.component.html',
  styleUrls: ['./add-usertype.component.scss']
})
export class AddUsertypeComponent implements OnInit {

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
      USER_TYPE_NAME: ['', Validators.required],
      USER_TYPE_ROLE: ['', Validators.required],
      USER_TYPE_PERMISSION: ['', Validators.required]
    });
    this.userService.getAllUserTypes()
      .subscribe(data => {
        this.usertype = data;
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.userService.addUserType(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['list-usertype']);
        });
    }
  }


  get f() { return this.addForm.controls; }


}
