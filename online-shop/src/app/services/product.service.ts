import {Injectable} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {AppConfig} from '../app.config';
import {Product} from '../models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private static productsUrl = AppConfig.API_ENDPOINT + '/products';

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ProductService.productsUrl, AppConfig.BODY);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(ProductService.productsUrl + '/' + id, AppConfig.BODY);
  }

  removeProduct(id: number): Subscription {
    return this.httpClient.delete(ProductService.productsUrl + '/' + id).subscribe();
  }

}
