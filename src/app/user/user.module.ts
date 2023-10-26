import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../Core/Services/user-service.service';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
   
    UsersListComponent,
         AddUserComponent
  
  ],
  providers:[UserServiceService],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
