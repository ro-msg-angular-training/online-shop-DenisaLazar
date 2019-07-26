import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/product';

import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

  displayDetails(product: Product) {
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['products', product.id]), {relativeTo: this.route};
  }



}
