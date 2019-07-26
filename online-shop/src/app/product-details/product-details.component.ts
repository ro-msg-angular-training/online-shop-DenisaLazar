import {Component, OnInit, Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product';
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

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  sendProductToAdd() {
    this.addToCart.emit(this.product);
  }

  sendProductToDelete() {
    this.removeFromCatalogue.emit(this.product);
  }

  redirectToMainPage() {
    this.router.navigate(['products']);
  }

}
