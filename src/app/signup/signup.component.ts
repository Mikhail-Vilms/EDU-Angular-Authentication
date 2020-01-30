import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  requiredAlert: string = 'This field is required';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null){
      this.router.navigate(['/home']);
    }
    
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupFormGroup = this.fb.group({
      username: ['', [Validators.required, this.checkUsername]],
      email: ['', [Validators.required, this.checkEmail]],
      password: ['', [Validators.required, this.checkPassword]],
      confirm: ['', Validators.required],
    });
  }

  // ==================================== USERNAME ============================================

  checkUsername(control) {
    let enteredUsername = control.value;

    // Alphanumeric characters and hyphens
    let usernameRegex = /^[a-zA-Z0-9]+([-]?[a-zA-Z0-9])*$/;

    return (enteredUsername && !usernameRegex.test(enteredUsername)) ? { 'pattern': true } : null;
  }

  getErrorUsername() {
    let emailCtrl = this.signupFormGroup.get('username');

    if (emailCtrl.hasError('required')) {
      return this.requiredAlert;
    }
    if (emailCtrl.hasError('pattern')) {
      return 'Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen';
    }

    return '';
  }

  // ==================================== EMAIL ============================================

  checkEmail(control) {
    let enteredEmail = control.value;

    //(?=.*[a-z]) : Should have at least one lower case
    //(?=.*[A-Z]) : Should have at least one upper case
    //.{4,} : Minimum 4 characters
    let emailRegex = /[^@]+@[^\.]+\..+/;

    return (enteredEmail && !emailRegex.test(enteredEmail)) ? { 'pattern': true } : null;
  }

  getErrorEmail() {
    let emailCtrl = this.signupFormGroup.get('email');

    if (emailCtrl.hasError('required')) {
      return this.requiredAlert;
    }
    if (emailCtrl.hasError('pattern')) {
      return 'Not a valid email address';
    }

    return '';
  }

  // ==================================== PASSWORD ============================================

  checkPassword(control) {
    let enteredPassword = control.value

    //(?=.*[a-z]) : Should have at least one lower case
    //(?=.*[A-Z]) : Should have at least one upper case
    //.{4,} : Minimum 4 characters
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

    return (enteredPassword && !passwordRegex.test(enteredPassword)) ? { 'pattern': true } : null;
  }

  getErrorPassword() {
    let passwordCtrl = this.signupFormGroup.get('password');

    if (passwordCtrl.hasError('required')) {
      return 'Field is required (at least four characters and uppercase letter)';
    }
    if (passwordCtrl.hasError('pattern')) {
      return 'Password needs to be at least four characters and one uppercase letter';
    }

    return '';
  }

  // ==================================== CONFIRM ============================================

  getErrorConfirm() {
    let confirmCtrl = this.signupFormGroup.get('confirm');

    if (confirmCtrl.hasError('required')) {
      return this.requiredAlert;
    }

    return '';
  }

  // ========================================= SUBMIT ===================================================

  onSubmit() {
    console.log("==== onSubmit ====");

    if (!this.signupFormGroup.valid) {
      console.log("==== VALIDATION FAILED ====");
      return;
    }

    this.usersService
      .registerPost(
        this.signupFormGroup.value.username,
        this.signupFormGroup.value.email,
        this.signupFormGroup.value.password)
      .subscribe((res: any) => {
        if (res.succeeded) {
          this.router.navigate(['/signup-success']);
        } else {
          console.log(res.errors)
        }
      },
      err => {
        console.log(err);
      });
  }
}