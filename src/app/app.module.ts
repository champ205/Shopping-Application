import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssueBookModule } from './issue-book/issue-book.module';
import { IssueBookComponent } from './issue-book/issue-book/issue-book.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component : HomeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path:'**', redirectTo:'home', pathMatch:'full'}
    ]),
    NavbarModule,
    HomeModule,
    IssueBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
