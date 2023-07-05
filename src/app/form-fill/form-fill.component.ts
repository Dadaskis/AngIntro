import { Component } from '@angular/core';

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.css']
})
export class FormFillComponent {
  postTitle: string = ""
  postImgUrl: string = ""
  postDetail: string = ""
  postUrl: string = ""
  postTitleBackground: boolean = false
}
