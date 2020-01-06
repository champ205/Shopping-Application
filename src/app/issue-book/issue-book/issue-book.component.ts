import { Component, OnInit } from '@angular/core';
import {CartService} from '../../Services/cart.service';
import { StatusCheckService } from 'src/app/Services/status-check.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
cartItems;
  constructor(private toBeIssued : CartService, private statusCheck : StatusCheckService, private data : DataService) {
    this.cartItems = this.toBeIssued.getCartItems();
   }

  ngOnInit() {
  }

  booksIssued(){
    this.cartItems.forEach(cartItem => {
      cartItem.status === 'Issued';
      if(this.data.leftBookShelf.includes(cartItem))
        {
          this.data.leftBookShelf.forEach(book => {
            if(cartItem === book){
              book.status = 'Issued';
              var index = this.statusCheck.availableBooks.indexOf(book);
              if(index!=-1)
                this.statusCheck.availableBooks.splice(index,1);
              }
          });
        }
        else if(this.data.middleBookShelf.includes(cartItem))
        {
          this.data.middleBookShelf.forEach(book => {
            if(cartItem === book){
              book.status = 'Issued';
              var index = this.statusCheck.availableBooks.indexOf(book);
              if(index!=-1)
                this.statusCheck.availableBooks.splice(index,1);
              }
          });
        }
        else(this.data.rightBookShelf.includes(cartItem))
        {
          this.data.rightBookShelf.forEach(book => {
            if(cartItem === book) {
              book.status = 'Issued';
              var index = this.statusCheck.availableBooks.indexOf(book);
              if(index!=-1)
                this.statusCheck.availableBooks.splice(index,1);
              }
          });
        }
    });
    this.toBeIssued.cartItems = [];
  }

}
