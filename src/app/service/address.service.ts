import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/neerseva/addresses';

  getAllAddresses() {
    return this.http.get<Address[]>(this.baseUrl);
  }


  getAddressById(ADDRESS_ID: any) {
    return this.http.get<Address>(this.baseUrl + '/' + ADDRESS_ID);
  }


  addAddress(address: Address) {
    return this.http.post(this.baseUrl, address);
  }

  updateAddress(address: Address) {
    return this.http.put(this.baseUrl  + '/' + address.ADDRESS_ID, address);
  }

  deleteAddress(ADDRESS_ID: string) {
    return this.http.delete(this.baseUrl + '/' + ADDRESS_ID);
  }


}
