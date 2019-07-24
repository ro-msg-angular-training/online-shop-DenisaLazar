import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../product';
import { PRODUCTS } from '../products';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getAllProducts(): Observable<Product[]>{
    return of(PRODUCTS);
  }

  getProduct(id:number): Observable<Product>{
      //fetch a product from mock products based on its id
      return of(PRODUCTS.find(product=>product.id==id));
  }


}
