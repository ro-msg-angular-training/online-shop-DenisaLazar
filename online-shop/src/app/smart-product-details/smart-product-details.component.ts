import {Component, OnInit} from '@angular/core';
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

  // tslint:disable-next-line:max-line-length
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
    window.alert('The product has been removed from the catalogue');
    this.router.navigate(['products']);
  }



}
