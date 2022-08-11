import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInPage },
    { path: 'sign-up', component: SignUpPage, canActivate: [AuthGuardService] }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AuthRoutingModule {}
