import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SignUpPage } from './pages/sign-up/sign-up.page';
import { SignInPage } from './pages/sign-in/sign-in.page';

import { AuthService } from './service/auth.service';
import { VerifyAuthService } from './service/verify-auth.service';
import { AuthErrorService } from './service/auth-errors.service';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [
    SignInPage,
    SignUpPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService,
    VerifyAuthService,
    { provide: ErrorHandler, useValue: AuthErrorService }
  ]
})
export class AuthModule { }
