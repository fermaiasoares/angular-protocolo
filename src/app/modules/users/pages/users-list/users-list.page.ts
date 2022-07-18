import { Component, OnInit } from "@angular/core";

import { ApiService } from "src/app/services/api-service/api.service";

import { User } from "../../interface/user";

@Component({
    selector: 'app-list-users',
    templateUrl: './users-list.page.html',
    styleUrls: ['./users-list.page.scss']
})

class UsersListPage implements OnInit {
    public users: User[] = []

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getUsers().then(users => this.users = users);
    }
}

export { UsersListPage }
