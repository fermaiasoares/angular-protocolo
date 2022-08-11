import { Component, OnInit } from "@angular/core";

import { User } from "../../interface/user";

@Component({
    selector: 'app-list-users',
    templateUrl: './users-list.page.html',
    styleUrls: ['./users-list.page.scss']
})

class UsersListPage implements OnInit {
    public users: User[] = []

    constructor() {}

    ngOnInit(): void {
    }
}

export { UsersListPage }
