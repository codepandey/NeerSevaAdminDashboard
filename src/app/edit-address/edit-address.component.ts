import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { AddressService } from '../service/address.service';
import {first} from 'rxjs/operators';
import { Address } from '../model/address.model';


@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

    address: Address;
    editForm: FormGroup;
    submitted = false;


    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private itemService: ItemService,
      private addressService: AddressService
      ) { }

    ngOnInit() {
      const ADDRESS_ID = localStorage.getItem('editAddressId');
      if (!ADDRESS_ID) {
        alert('Invalid action.');
        this.router.navigate(['list-item']);
        return;
      }
      this.editForm = this.formBuilder.group({
        ADDRESS_ID: ['', Validators.required],
        ADDRESS_TYPE: ['', Validators.required],
        ADDR_LINE1:   ['', Validators.required],
        ADDR_LINE2:   ['', Validators.required],
        ADDR_LINE3:   ['', Validators.required],
        ADDR_LINE4:   ['', Validators.required],
        PIN:          ['', Validators.required],
        CITY:         ['', Validators.required],
        STATE:        ['', Validators.required],
        COUNTRY:      ['', Validators.required],
        LOCATION_LONG:['', Validators.required],
        LOCATION_LATT:['', Validators.required],
        LOCATION_NAME:['', Validators.required]
      });
      this.addressService.getAddressById(+ADDRESS_ID)
      .subscribe(data => {
        this.editForm.setValue(data[0]);
      });
    }



    get f() { return this.editForm.controls; }

    onSubmit() {
      this.addressService.updateAddress(this.editForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['list-address']);
          },
          error => {
            alert(error);
          });
    }
}
