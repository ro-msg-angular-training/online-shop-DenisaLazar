import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../products';
import { Product } from '../product'; 

import { Router } from '@angular/router'; 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products = PRODUCTS;



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
  
  displayDetails(product: Product){
      this.router.navigate(['products',product.id]), {relativeTo : this.route};
  }

}
