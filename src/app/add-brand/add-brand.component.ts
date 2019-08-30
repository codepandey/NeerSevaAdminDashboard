import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from '../service/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private brandService: BrandService) { }

  brands;
  addForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
        BRAND_NAME: ['', Validators.required],
        //BRAND_DATE_CREATED: ['', Validators.required]
    });
   }


  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.brandService.addBrand(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-brand']);
      });
    }
  }

  get f() { return this.addForm.controls; }

}
