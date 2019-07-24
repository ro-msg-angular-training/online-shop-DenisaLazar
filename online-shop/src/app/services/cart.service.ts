import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  items = [];

  constructor() { }

  getCartContent(){
    return this.items;
  }

  addToCart(product){
    this.items.push(product);
    
  }
  
  removeFromCart(product){
    this.items.splice(this.items.indexOf(product),1); //finds the index of the given parameter and deletes one element starting from that index 
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
