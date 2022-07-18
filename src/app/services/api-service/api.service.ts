import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';
import { User } from 'src/app/modules/users/interface/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    protected API_URL = environment.apiUrl || 'http://localhost:3000';

    constructor(private httpClient: HttpClient) { }

    async getUsers() {
        const userData = new Promise<User[]>((resolve, _) => {
            this.httpClient.get<User[]>(`${this.API_URL}/users`)
                .subscribe(response => resolve(response));
        });

        return userData;
    }
}
