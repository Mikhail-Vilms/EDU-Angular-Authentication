import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinFormGroup: FormGroup;
  requiredAlert: string = 'This field is required';
  errorToDisplay: string = '';


  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null){
      this.router.navigate(['/home']);
    }

    this.createSigninForm();
    this.errorToDisplay = '';
  }

  createSigninForm() {
    this.signinFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // ==================================== EMAIL ============================================

  getErrorUsername() {
    let emailCtrl = this.signinFormGroup.get('username');

    if (emailCtrl.hasError('required')) {
      return this.requiredAlert;
    }

    return '';
  }
  
  // ==================================== PASSWORD ============================================

  getErrorPassword() {
    let passwordCtrl = this.signinFormGroup.get('password');

    if (passwordCtrl.hasError('required')) {
      return this.requiredAlert;
    }

    return '';
  }

  // ========================================= SUBMIT ===================================================

  onSubmit() {
    if (!this.signinFormGroup.valid) {
      this.errorToDisplay = "Fill all required fields";
      return;
    }
    
    console.log(' == onSubmit == ');
    
    this.usersService
      .loginPost(
        this.signinFormGroup.value.username,
        this.signinFormGroup.value.password)
      .subscribe((res: any) => {
          localStorage.setItem('token', res.token); 
          this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      });
  }

  getErrorToDisplay(){
    return this.errorToDisplay;
  }
}
