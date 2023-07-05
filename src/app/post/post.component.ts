import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  title: string = "List of Posts";
  parentMessage: string = "Test Message!";

  @Input() fromParent!: string;

}
