import { HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { User } from '../interface/user';

import { UsersListService } from './users-list.service';

describe('UsersListService', () => {
    let service: UsersListService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(UsersListService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be create instance of UsersListService', () => {
        expect(service).toBeTruthy();
    });

    it('should return an array of users', fakeAsync(async () =>{
        const usersMock: User[] = [{ name: 'John Doe', email: 'johndoe@test.com'}];

        const userList = service.getUsersList();

        const req = httpTestingController.expectOne(`${environment.apiUrl}/users`);
        req.flush(usersMock);

        flush();

        expect(await userList).toEqual(usersMock);
    }))

    it('should not be able list users with network error', fakeAsync(async () =>{
        const usersMock: User[] = [{ name: 'John Doe', email: 'johndoe@test.com'}];
        const errorResponse: HttpHeaderResponse = new HttpHeaderResponse({
            status: 400,
            statusText: 'Bad Request',
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });

        const userList = service.getUsersList();

        const req = httpTestingController.expectOne(`${environment.apiUrl}/users`);
        req.flush(usersMock, errorResponse);

        try {
            flush();
            await userList;
        } catch(error) {
            expect(error).toBeInstanceOf(HttpErrorResponse);
        }
    }))
});
