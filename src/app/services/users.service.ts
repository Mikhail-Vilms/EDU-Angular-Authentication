import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly BaseURI = 'http://localhost:5000';

  constructor(private http: HttpClient) { }
  
  // This function will send POST requset to back-end WEB API to create new user
  registerPost(username, email, password) {
    console.log(" == registerPost == ");

    console.log("username: " + username);
    console.log("email: " + email);
    console.log("password: " + password);
    
    var body = {
      UserName: username,
      Email: email,
      Password: password
    };

    return this.http.post(this.BaseURI + '/api/ApplicationUser/Register', body);
  }

  // This function will send POST requset to back-end WEB API to login user
  loginPost(username, password) {
    console.log(" == loginPost == ");
    
    console.log("username: " + username);
    console.log("password: " + password);

    var body = {
      UserName: username,
      Password: password
    };

    return this.http.post(this.BaseURI + '/api/ApplicationUser/Login', body);
  }
}
