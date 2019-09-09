import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

import { User } from '../model/user.model';
import { UserType } from '../model/usertype.model';
import {Observable} from 'rxjs/index';
import { UserView } from '../model/userview.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}


  private baseUrl = 'http://localhost:3000/neerseva/';

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }


  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl + 'users')
    .pipe(catchError(this.handleError));
  }

  getAllUserView() {
    return this.http.get<UserView[]>(this.baseUrl + 'userview');
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
    return this.http.get(this.baseUrl + 'usercounts');
  }

  getUserCustomerTypeCount() {
    return this.http.get(this.baseUrl + 'customerscount');
  }





  // Service for  User type


  getAllUserTypes() {
    return this.http.get<UserType[]>(this.baseUrl + 'usertypes');
  }

  getUserTypeById(USER_TYPE_ID: any): Observable<UserType> {
    return this.http.get<UserType>(this.baseUrl + 'usertype' + '/' + USER_TYPE_ID);
  }

  // getUserView() {
  //   return this.http.get<UserView[]>(this.baseUrl + 'userview');
  // }

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
