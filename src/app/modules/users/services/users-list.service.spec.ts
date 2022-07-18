import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { User } from '../interface/user';

import { UsersListService } from './users-list.service';

describe('UsersListService', () => {
    let service: UsersListService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ]
        });
        service = TestBed.inject(UsersListService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be able list all users', async () => {
        const users = await service.getUsers();
        const totalUsers = users.length;
        expect(users).toBeTruthy();
        expect(users.length).toBe(totalUsers);
    })

    it('should not be able list users', async () => {
        const users = service.getUsers();
        expect(users).toBeInstanceOf(Promise<User[]>);
    })
});
