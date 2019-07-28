import {Injectable} from '@angular/core';

import {Product} from '../models/product';

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

    // tslint:disable-next-line:forin
    for (const i in this.items) {
      total += this.items[i].price;
    }
    return total;
  }
}
