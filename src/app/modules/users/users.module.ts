import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

import { UsersListService } from './services/users-list.service';

import { UserFormPage } from './pages/users-form/user-form.page';
import { UsersListPage } from './pages/users-list/users-list.page';

@NgModule({
  declarations: [
    UserFormPage,
    UsersListPage
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers: [
    UsersListService
  ]
})
export class UsersModule { }
