import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';

import { FrontpageComponent } from './frontpage/frontpage.component';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // { path: '', redirectTo: 'user/registration', pathMatch: 'full' },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   children: [
  //     { path: 'registration', component: RegistrationComponent },
  //     { path: 'login', component: LoginComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
