import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Vendor } from '../model/vendor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VendorService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/api/vendors';

  getVendors() {
    return this.http.get<Vendor[]>(this.baseUrl);
  }

  getVendorById(id: number) {
    return this.http.get<Vendor>(this.baseUrl + '/' + id);
  }

  createVendor(vendor: Vendor) {
    return this.http.post(this.baseUrl, vendor);
  }

  updateVendor(vendor: Vendor) {
    return this.http.put(this.baseUrl, vendor);
  }

  deleteVendor(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
