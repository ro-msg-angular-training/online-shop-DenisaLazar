import {Injectable} from '@angular/core';

import {Product} from '../models/product';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: Product[] = [];

  constructor() {
  }

  getCartContent() {
    return this.items;
  }

  addToCart(product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotal() {
    let total = 0;

    for (const i in this.items) {
      total += this.items[i].price;
    }

    return total;
  }
}
