import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../models/product';
import {OrderService} from '../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[];

  total: number;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartContent();
    this.total = this.cartService.getTotal();
  }

  placeOrder() {
    if (this.total === 0) {
      window.alert('Your order is empty');
    } else {
      return this.orderService.placeOrder();
    }
  }

  clearCart() {
    return this.cartService.clearCart();
  }

}
