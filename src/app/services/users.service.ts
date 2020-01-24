import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly BaseURI = 'http://localhost:5000';

  constructor(private http: HttpClient) { }
  
  // This function will send POST requset to back-end WEB API to create new user
  register(userName, email, password) {
    console.log("userName: " + userName);
    console.log("email: " + email);
    console.log("password: " + password);
    
    var body = {
      UserName: userName,
      Email: email,
      Password: password
    };

    // return this.http.post(this.BaseURI + '/api/ApplicationUser/Register', body);
  }
}
