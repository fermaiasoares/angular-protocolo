import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './modules/auth/service/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
