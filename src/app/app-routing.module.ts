import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-success', component: SignupSuccessComponent },

  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'profile-page', component: ProfilePageComponent , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
