import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormFillComponent } from './form-fill/form-fill.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { UserListFullComponent } from './user-list-full/user-list-full.component';
import { UserListNamesComponent } from './user-list-names/user-list-names.component';
import { UsersService } from './services/users.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    FormFillComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    UserListFullComponent,
    UserListNamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
