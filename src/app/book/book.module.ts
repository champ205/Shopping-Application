import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';



@NgModule({
  declarations: [IssueBookComponent, AvailableBooksComponent, IssuedBooksComponent],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
