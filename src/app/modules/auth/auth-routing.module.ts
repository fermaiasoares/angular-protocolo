import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

const routes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInPage },
    { path: 'sign-up', component: SignUpPage }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AuthRoutingModule {}
