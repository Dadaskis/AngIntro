import { Component } from '@angular/core';

export interface UserData {
  address: string;
  email: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usernameValue: string = "";
  emailValue: string = "";
  addressValue: string = "";

  userDataBase: Array<UserData> = []

  saveData() {
    let data: UserData = {
      address: this.addressValue,
      email: this.emailValue,
      name: this.usernameValue
    }
    this.userDataBase.push(data)

    this.addressValue = "";
    this.emailValue = "";
    this.usernameValue = "";
  }

  removeUser(index: int) {
    this.userDataBase.splice(index, 1)
  }
}
