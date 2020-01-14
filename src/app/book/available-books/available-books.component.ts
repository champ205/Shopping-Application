import { Component, OnInit } from '@angular/core';
import { StatusCheckService } from 'src/app/Services/status-check.service';
import { DataService } from 'src/app/Services/data.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  availableBooks;
  leftBookShelf;
  middleBookShelf;
  rightBookShelf;
  title = "Here's the list of books you can issue!";
  constructor(private booksAvailable : StatusCheckService, private data : DataService, private toBeIssued : CartService) {
    this.leftBookShelf = data.getLeftBookShelf();
    this.middleBookShelf = data.getMiddleBookShelf();
    this.rightBookShelf = data.getRightBookShelf();
   }

  ngOnInit() {
    this.showAvailableBooks();
    this.changeTitle();
  }
  updateCart(event : any){
    this.toBeIssued.cartItems.push(event);
  }

  changeTitle()
  {
    if (this.booksAvailable.availableBooks.length == 0)
      {this.title = "No available books!"; console.log(this.title);} 
  }
 
  showAvailableBooks(){
    this.leftBookShelf.forEach(book => {
      if(book.status === 'Available') {
        if(!this.booksAvailable.availableBooks.includes(book))
          this.booksAvailable.availableBooks.push(book);
      }
    });
    this.middleBookShelf.forEach(book => {
      if(book.status === 'Available') {
        if(!this.booksAvailable.availableBooks.includes(book))
          this.booksAvailable.availableBooks.push(book);
      }
    });
    this.rightBookShelf.forEach(book => {
      if(book.status === 'Available') {
        if(!this.booksAvailable.availableBooks.includes(book))
          this.booksAvailable.availableBooks.push(book);
      }
  });
    this.availableBooks = this.booksAvailable.availableBooks;
  }

}
