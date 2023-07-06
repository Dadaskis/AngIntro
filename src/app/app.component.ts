import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray: Array<string> = [
    'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'
  ]

  objArray: Array<object> = [
    { id: 0, postTitle: "Where to go?" },
    { id: 1, postTitle: "Post 1." },
    { id: 3, postTitle: "Front-End 101" },
    { id: 4, postTitle: "Hey, you!" },
    { id: 5, postTitle: "Post 5." },
    { id: 8, postTitle: "Post 10." },
  ]
}
