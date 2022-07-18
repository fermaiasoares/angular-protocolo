import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';

import { CreateUserService } from './create-user.service';

import { User } from '../interface/user';

describe('CreateUserService', () => {
    let service: CreateUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ]
        });
        service = TestBed.inject(CreateUserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be able create a user', async () => {
        const user: User = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.lorem.word(),
            isAdmin: faker.datatype.boolean()
        }

        const response = await service.create(user);
        expect(Object.keys(response)).toContain('id');
    });
});
