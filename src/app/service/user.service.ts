import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';
import { UserType } from '../model/usertype.model';
import {Observable} from 'rxjs/index';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}


  private baseUrl = 'http://localhost:3000/neerseva/';

  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }


  getUserById(USER_ID: any): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users' +  '/' + USER_ID);
  }

  addUser(user: User) {
    return this.http.post(this.baseUrl + 'users', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'users' +  '/' + user.USER_ID, user);
  }

  deleteUser(USER_ID: string) {
    return this.http.delete(this.baseUrl + 'users' +  '/' + USER_ID);
  }


  getUserCount() {
    return this.http.get(this.baseUrl + 'userscount');
  }

  getUserCustomerTypeCount() {
    return this.http.get(this.baseUrl + 'customerscount');
  }


  getAllUserTypes() {
    return this.http.get<UserType[]>(this.baseUrl + 'usertypes');
  }


  getAllUsersTypes() {
    return this.http.get<UserType[]>(this.baseUrl + 'userstypes');
  }

  getUserTypeById(USER_TYPE_ID: any): Observable<UserType> {
    return this.http.get<UserType>(this.baseUrl + 'usertypes' + '/' + USER_TYPE_ID);
  }

  addUserType(usertype: UserType) {
    return this.http.post(this.baseUrl + 'usertypes', usertype);
  }

  updateUserType(usertype: UserType) {
    return this.http.put(this.baseUrl + 'usertypes' +  '/' + usertype.USER_TYPE_ID, usertype);
  }

  deleteUserType(USER_TYPE_ID: string) {
    return this.http.delete(this.baseUrl + 'usertypes' + '/' + USER_TYPE_ID);
  }


}
