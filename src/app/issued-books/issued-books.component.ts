import { Component, OnInit } from '@angular/core';
import { StatusCheckService } from '../Services/status-check.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {

  booksIssuedToUser;
  leftBookShelf;
  middleBookShelf;
  rightBookShelf;
  constructor(private booksIssued : StatusCheckService,private data : DataService) {
     this.leftBookShelf = data.getLeftBookShelf();
    this.middleBookShelf = data.getMiddleBookShelf();
    this.rightBookShelf = data.getRightBookShelf();
   }

  ngOnInit() {
    this.showIssuedBooks();
  }

  showIssuedBooks(){
    this.leftBookShelf.forEach(book => {
      if(book.status === 'Issued') {
        if(!this.booksIssued.issuedBooks.includes(book))
          this.booksIssued.issuedBooks.push(book);
      }
    });
    this.middleBookShelf.forEach(book => {
      if(book.status === 'Issued') {
        if(!this.booksIssued.issuedBooks.includes(book))
          this.booksIssued.issuedBooks.push(book);
      }
    });
    this.rightBookShelf.forEach(book => {
      if(book.status === 'Issued') {
        if(!this.booksIssued.issuedBooks.includes(book))
          this.booksIssued.issuedBooks.push(book);
      }
  });
  this.booksIssuedToUser = this.booksIssued.issuedBooks;
  }
}
