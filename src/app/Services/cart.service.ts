import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cartItems = [];
  constructor() { }

  getCartItems(){
    return this.cartItems;
  }
}
