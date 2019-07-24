import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { PRODUCTS } from '../products';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product;

  @Output() p =  new EventEmitter<Product>(); 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      let productId = this.route.snapshot.paramMap.get('id');
      this.product = PRODUCTS.find(x=>x.id==<number><any>productId);
  }

  send(){
    this.p.emit(this.product);
  }

}
  