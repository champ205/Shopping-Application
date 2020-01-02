import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { DataService } from '../Services/data.service';
import {CartService} from '../Services/cart.service';
import {RouterModule} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Explore the world of books....';
  searchBook;
  leftBookShelf;
  middleBookShelf;
  rightBookShelf;
  cartCount = false;
  constructor( private data : DataService, private toBeIssued : CartService ) { 
    this.leftBookShelf = data.getLeftBookShelf();
    this.middleBookShelf = data.getMiddleBookShelf();
    this.rightBookShelf = data.getRightBookShelf();
  }

  ngOnInit() {
    this.cartStatus();
  }
 cartStatus(){   //not workin!! fix
   if(this.toBeIssued.cartItems.length>0)
   {    this.cartCount = true;  console.log(this.cartCount);} 
   else
    {   this.cartCount = false;  console.log(this.cartCount); }
 }

 pushToCart(event : any){
   var foundName, foundAuthor;
   foundName = this.toBeIssued.cartItems.some((e1) => e1.name === event.name); console.log(foundName);
   foundAuthor = this.toBeIssued.cartItems.some((e1) => e1.author === event.author); console.log(foundAuthor);
   if(!foundName&&!foundAuthor)
      this.toBeIssued.cartItems.push(event);
   console.log(this.toBeIssued.cartItems);
 }
    
 }
