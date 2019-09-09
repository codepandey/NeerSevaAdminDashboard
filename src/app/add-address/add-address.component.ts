import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private addressService: AddressService) { }

  brands;
  addForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      ADDRESS_TYPE: ['', Validators.required],
      ADDR_LINE1:   ['', Validators.required],
      ADDR_LINE2:   ['', Validators.required],
      ADDR_LINE3:   ['', Validators.required],
      ADDR_LINE4:   ['', Validators.required],
      PIN:          ['', Validators.required],
      CITY:         ['', Validators.required],
      STATE:        ['', Validators.required],
      COUNTRY:      ['', Validators.required]
    });
   }


  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.addressService.addAddress(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-address']);
      });
    }
  }

  get f() { return this.addForm.controls; }


}
