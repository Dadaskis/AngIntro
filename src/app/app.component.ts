import { Component, ViewChild, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngIntro';
  parentMessage: string = "Parent Message";
  
  @ViewChild(PostComponent) childComponent !: PostComponent;

  //constructor() {
  ngOnInit() {
    console.log(this.childComponent.childMessage);
  }
}
