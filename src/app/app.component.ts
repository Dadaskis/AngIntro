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

  addressValue: string;
  emailValue: string;
  usernameValue: string;

  userDataBase: Array<UserData> = []

  saveData() {
    data = {
      address: addressValue,
      email: emailValue,
      name: usernameValue
    }
    userDataBase.push(data)

    addressValue = "";
    emailValue = "";
    usernameValue = "";
  }

  removeUser(index) {
    this.userDataBase.splice(index, 1)
  }
}
