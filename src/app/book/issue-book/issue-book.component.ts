import { Component, OnInit } from '@angular/core';
import {CartService} from '../../Services/cart.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  cartItems=[];
  constructor(private toBeIssued : CartService) {
    this.cartItems = this.toBeIssued.getCartItems(); 
    console.log(this.cartItems);
   }

  ngOnInit() {
  }


}
