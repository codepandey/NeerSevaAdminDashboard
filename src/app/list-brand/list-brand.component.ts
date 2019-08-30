import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Brand } from '../model/brand.model';
import { BrandService } from '../service/brand.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {
  brands;
  BRAND_NAME;
  constructor(
    private router: Router,
    private brandService: BrandService
    ) { }

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands(): void {
    this.brandService.getAllBrands().subscribe(data => {
      this.brands = data;
    });
  }

  deleteBrand(brand: Brand) {
    this.brandService.deleteBrand(brand.BRAND_ID)
    .subscribe(data => {
      this.getAllBrands();
    });
  }

  updateBrand(brand: Brand){
    localStorage.removeItem("editBrandId");
    localStorage.setItem("editBrandId", brand.BRAND_ID);
    this.router.navigate(['edit-brand']);
  }

  Search() {
    if (this.BRAND_NAME !==  '') {
    } else if (this.BRAND_NAME === '') {
      this.ngOnInit();
    }
    this.brands = this.brands.filter(res => {
      return res.BRAND_NAME.toLowerCase().match(this.BRAND_NAME.toLowerCase());
    });

  }

}
