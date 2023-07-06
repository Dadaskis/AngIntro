import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray: Array<string> = [
    'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'
  ];

  objArray: Array<any> = [
    { id: 0, postTitle: "Where to go?" },
    { id: 1, postTitle: "Post 1." },
    { id: 3, postTitle: "Front-End 101" },
    { id: 4, postTitle: "Hey, you!" },
    { id: 5, postTitle: "Post 5." },
    { id: 8, postTitle: "Post 10." },
  ];

  addNewTitle() {
    this.objArray.push({ id: 10, postTitle: "Post 12!" });
  }

  removeTitle(post: any) {
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }
}
