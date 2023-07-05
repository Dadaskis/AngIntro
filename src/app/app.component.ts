import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = "Parent Message";
  
  @ViewChild(PostComponent) childComponent !: PostComponent;

  constructor() {
    console.log(this.childComponent);
  }

  ngAfterViewInit() {
    console.log(this.childComponent);
  }
}
