import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usersService?: UsersService

  constructor(private service: UsersService) {
    this.usersService = service
  }

  onSubmit(fillForm: NgForm) {
    if(!fillForm.valid) {
      return
    }

    this.usersService.addUser({
      uniqueID: 0,
      name: fillForm.value['fullName'],
      displayName: fillForm.value['fullName']
    })
  }
}
