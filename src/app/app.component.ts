import { Component, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { PostComponent } from './post/post.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = "Parent Message";
  childMessageValue: string = "";
  fromChildMessageValue: string = "";
  @Output() testImageUrl: string = "www.small-icons.com/stock-icons/small-computer/16x16/add.gif";
  
  @ViewChild(PostComponent) childComponent !: PostComponent;

  constructor() {
    console.log(this.childComponent);
  }

  ngAfterViewInit() {
    console.log(this.childComponent);
    this.childMessageValue = this.childComponent.childMessage;
  }

  receiveMessage($eventValue: string) {
    console.log($eventValue)
    this.fromChildMessageValue = $eventValue;
  }
}
