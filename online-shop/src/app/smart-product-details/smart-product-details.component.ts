import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-smart-product-details',
  templateUrl: './smart-product-details.component.html',
  styleUrls: ['./smart-product-details.component.css']
})

export class SmartProductDetailsComponent implements OnInit {

  product: Product;


  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCatalogue(product: Product) {
    this.productService.removeProduct(product.id);
    this.router.navigate(['products']);
  }

}
