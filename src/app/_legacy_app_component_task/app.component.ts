import { 
  Component, 
  ViewChild, 
  AfterViewInit, 
  EventEmitter, 
  Output, 
  ViewContainerRef,
  ComponentRef
} from '@angular/core';
import { PostComponent } from './post/post.component'
import { FormFillComponent } from './form-fill/form-fill.component'

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
  userNameValue: string = "";
  @Output() testImageUrl: string = 
    "https://opengameart.org/sites/default/files/styles/medium/public/penguin_16x16_prev.png";
  @Output() teamStatus: boolean = false;
  
  @ViewChild(PostComponent) childComponent !: PostComponent;

  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr !: ViewContainerRef;
  formFill !: ComponentRef<FormFillComponent>

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

  onKeyUp($event: any) {
    console.log("Key Up")
    console.log($event)
  }

  onInputEnter($event: any) {
    console.log("Input Enter!")
    console.log($event.target)
    console.log($event.target.value)
  }

  onUsernameEnter($usernameValue: any) { 
    console.log("Username entered!")
    console.log($usernameValue)
  }

  onUsernameEnterTwoWay() {
    console.log("Username Entered! Two-way data binding.")
    console.log(this.userNameValue)
  }

  proceedToFormFill() {
    let appRoot = document.getElementById("app-root")
    if (appRoot == null) {
      return
    }
    let body = document.getElementById("body")
    if (body == null) {
      return
    }
    appRoot.remove()
    this.formFill = this.vcr.createComponent(FormFillComponent)
    //body.append(formFill)
  }
}
