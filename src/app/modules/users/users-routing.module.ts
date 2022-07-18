import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { UserFormPage } from "./pages/users-form/user-form.page";
import { UsersListPage } from "./pages/users-list/users-list.page";

const routes: Route[] = [
    {
        path: '',
        component: UsersListPage,
    },
    {
        path: 'create',
        component: UserFormPage,
        data: { mode: 'create' }
    },
    {
        path: 'update',
        component: UserFormPage,
        data: { mode: 'update' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class UsersRoutingModule {}
