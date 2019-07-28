import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCatalogue = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();

  constructor(private location: Location, private router: Router) {
  }

  ngOnInit() {

  }

  addProductToCart() {
    this.addToCart.emit(this.product);
  }

  deleteProduct() {
    this.removeFromCatalogue.emit(this.product);
  }

  editProduct() {
    this.router.navigate(['edit/' + this.product.id], {});
  }

  redirectToMainPage() {
    this.location.back();
  }
}
