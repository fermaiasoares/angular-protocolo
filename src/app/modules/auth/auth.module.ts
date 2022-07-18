import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SignUpPage } from './pages/sign-up/sign-up.page';
import { SignInPage } from './pages/sign-in/sign-in.page';

@NgModule({
  declarations: [
    SignInPage,
    SignUpPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
