import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      uniqueID: 1029148,
      name: "gooddude",
      displayName: "Good Dude"
    },
    {
      uniqueID: 5235538,
      name: "urehere",
      displayName: "Sweden"
    },
    {
      uniqueID: 2345148,
      name: "username",
      displayName: "Generic User"
    },
  ]

  add_user(user: User) {
    this.users.push(user)
  }

  constructor() {

  }
}
