import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product';
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
    this.router.navigate(['products', product.id]);
  }

  addNewProduct() {
    this.router.navigate(['create-product'], {});
  }


  goToCart() {
    this.router.navigate(['cart']);
  }


}
