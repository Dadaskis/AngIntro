import { Component } from '@angular/core';
import { UsersService } from '../services/users'
import { User } from '../interfaces/user'

@Component({
  selector: 'app-user-list-full',
  templateUrl: './user-list-full.component.html',
  styleUrls: ['./user-list-full.component.css']
})
export class UserListFullComponent {
  users: Array<User> = {}

  constructor(private service: UsersService){ 
    users = service.users
  }
}
