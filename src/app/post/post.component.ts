import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  title: string = "List of Posts";
  parentMessage: string = "Test Message!";
  childMessage: string = "Child Test Message!";

  outputChildMessage: string = "Child Message Via Output";

  @Input() fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {
    this.messageEvent.emit(outputChildMessage)
  }

}
