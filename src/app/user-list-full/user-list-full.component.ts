import { Component } from '@angular/core';
import { UsersService } from '../services/users.service'
import { User } from '../interfaces/user'

@Component({
  selector: 'app-user-list-full',
  templateUrl: './user-list-full.component.html',
  styleUrls: ['./user-list-full.component.css']
})
export class UserListFullComponent {
  users: Array<User> = [ {uniqueID: 0, name: "Error", displayName: "Error"} ]
  usersService?: UsersService

  constructor(private service: UsersService){ 
    this.users = service.users
    this.usersService = service
  }

  addRandomUser() {
    if(this.usersService) {
      this.usersService.addUser({
        uniqueID: 10101010,
        name: "Random",
        displayName: "Randomous"
      })
    }
  }
}
