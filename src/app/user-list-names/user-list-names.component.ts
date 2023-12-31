import { Component } from '@angular/core';
import { UsersService } from '../services/users.service'
import { User } from '../interfaces/user'

@Component({
  selector: 'app-user-list-names',
  templateUrl: './user-list-names.component.html',
  styleUrls: ['./user-list-names.component.css']
})
export class UserListNamesComponent {
  users: Array<User> = [ {uniqueID: 0, name: "Error", displayName: "Error"} ]
  //service?: UsersService

  constructor(private service: UsersService){ 
    this.users = service.users
    //this.service = service
  }
}
