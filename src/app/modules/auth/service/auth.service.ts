import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environments/environment';
import { IAuthData, IAuthResponse } from '../intefaces/auth-data.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private jwtHelper: JwtHelperService,
        private http: HttpClient,
        private toast: ToastrService,
        private router: Router
    ) { }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(`@${environment.app_name_slug}:token`);

        if (token) {
            return !this.jwtHelper.isTokenExpired(token);
        }

        return false;
    }

    signIn(data: IAuthData): void {
        this.http.post<IAuthResponse>('http://159.65.162.119/auth', data).subscribe({
            next: ({ token, user }) => {
                this.toast.success('Autenticado com sucesso!', undefined, {
                    progressAnimation: 'increasing',
                    progressBar: true,
                    timeOut: 3000,
                    easeTime: 300,
                });

                localStorage.setItem(`@${environment.app_name_slug}:token`, token);
                localStorage.setItem(`@${environment.app_name_slug}:user`, JSON.stringify(user));

                this.router.navigateByUrl('/auth/sign-in');
            },
            error: () => {
                this.toast.error('Usuário e/ou senha inválidos.', 'Falha ao logar', {
                    progressAnimation: 'decreasing',
                    progressBar: true,
                    timeOut: 3000,
                    easeTime: 300,
                });
            }
        });
    }

    signOut(): void {
        localStorage.removeItem(`@${environment.app_name_slug}:token`);
        localStorage.removeItem(`@${environment.app_name_slug}:user`);

        if (!this.isAuthenticated()) {
            this.router.navigateByUrl('/auth/sign-in');
        }
    }
}
