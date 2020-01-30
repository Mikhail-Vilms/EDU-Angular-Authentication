import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';

// Custom components
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignupComponent } from './signup/signup.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

// Angular material components
import { MaterialModule } from './material.module';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

// Custom Services


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    SignupComponent,
    FrontpageComponent,
    SignupSuccessComponent,
    SigninComponent,
    HomeComponent,
    HomeToolbarComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    
    // Angular material components
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
