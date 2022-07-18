import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../interface/user';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CreateUserService {

    constructor(private httpClient: HttpClient) {
    }

    async create(data: User): Promise<User> {
        try {
            const user = new Promise<User>((resolve, _) => {
                this.httpClient.post<User>(`${environment.apiUrl}/users`, data)
                    .subscribe(res => resolve(res));
            })

            return user;
        } catch (error) {
            throw new Error('Não foi possível registrar o usuário');
        }
    }
}
