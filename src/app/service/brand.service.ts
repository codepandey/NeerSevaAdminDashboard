import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Brand } from '../model/brand.model';
import {Observable} from 'rxjs/index';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BrandService {

  constructor(private http: HttpClient) {}


  private baseUrl = 'http://localhost:3000/neerseva/brands';

  getAllBrands() {
    return this.http.get<Brand[]>(this.baseUrl);
  }


  getBrandById(BRAND_ID: any): Observable<Brand> {
    return this.http.get<Brand>(this.baseUrl + '/' + BRAND_ID);
  }

  addBrand(brand: Brand) {
    return this.http.post(this.baseUrl, brand);
  }

  updateBrand(brand: Brand) {
    return this.http.put(this.baseUrl + '/' + brand.BRAND_ID, brand);
  }

  deleteBrand(BRAND_ID: string) {
    return this.http.delete(this.baseUrl + '/' + BRAND_ID);
  }




}
