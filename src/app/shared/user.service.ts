import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  
  readonly BaseURI = 'http://localhost:5000';

  formModel = this.formBuilder.group({
    UserName: ['', Validators.required],
    Email: ['', [
      Validators.required,
      Validators.email
    ]
    ],
    Passwords: this.formBuilder.group({
      Password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]
      ],
      ConfirmPassword: ['', [
        Validators.required,
        Validators.minLength(6)
      ]
      ]
    }, { validator: this.comparePasswords })
  })

  comparePasswords(fb: FormGroup) {
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    if (confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors) {
      if (fb.get('Passwords').value != confirmPasswordCtrl.value)
        confirmPasswordCtrl.setErrors({ passwordMismatch: true })
      else
        confirmPasswordCtrl.setErrors(null);
    }
  }

  // This function will send POST requset to back-end WEB API to create new user
  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
    };

    return this.http.post(this.BaseURI + '/api/ApplicationUser/Register', body)
  }
}
