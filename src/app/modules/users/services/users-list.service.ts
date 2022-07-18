import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../interface/user';

import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersListService {
    constructor(private httpClient: HttpClient) { }

    async getUsers(): Promise<User[]> {
        try {
            const users = new Promise<User[]>((resolve, _) => {
                this.httpClient.get<User[]>(`${environment.apiUrl}/users`)
                    .subscribe((res) => resolve(res));
            })

            return users;
        } catch (error) {
            return [];
        }
    }
}
