import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
import { IssueBookComponent } from '../issue-book/issue-book/issue-book.component';
import { IssueBookModule } from '../issue-book/issue-book.module';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule ,
    IssueBookModule,
    RouterModule.forChild([
      {path : 'issueBook', component: IssueBookComponent}
    ])
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
