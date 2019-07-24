import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Input } from '@angular/core';

import { Product } from '../product';
import { CartService } from '../services/cart.service'


@Component({
  selector: 'app-smart-product-details',
  templateUrl: './smart-product-details.component.html',
  styleUrls: ['./smart-product-details.component.css']
})

export class SmartProductDetailsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }



}
