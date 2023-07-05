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
  @Output() testImageUrl: string = 
    "https://opengameart.org/sites/default/files/styles/medium/public/penguin_16x16_prev.png";
  @Output() teamStatus: boolean = false;
  
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

  switchTeams() {
    this.teamStatus = !this.teamStatus;
  }
}
