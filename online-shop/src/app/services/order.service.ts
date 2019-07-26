import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../app.config';
import {Product} from '../models/product';
import {CartService} from './cart.service';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private static ordersUrl = AppConfig.API_ENDPOINT + '/orders';

  content: Product[] = [];

  constructor(private httpClient: HttpClient, private cartService: CartService) {
  }


  getOrderContents(): Product[] {
    return this.cartService.getCartContent();
  }

  placeOrder(): Observable<{}> {

    let orderedItems: Product[] = [];
    orderedItems = this.getOrderContents();

    const customer = 'doej'; // mock (later it will be the name of the user who is currently logged in and placing the order)

    const order = new Order();
    order.setCustomer(customer);

    const orderContent = new Map<number, number>();

    for (const i in orderedItems) {
      if (orderContent.has(orderedItems[i].id)) {
        orderContent.set(orderedItems[i].id, orderContent.get(orderedItems[i].id) + 1);
      } else {
        orderContent.set(orderedItems[i].id, 1);
      }
    }

    order.setProducts(orderContent);

    return this.httpClient.post(OrderService.ordersUrl, order, AppConfig.BODY);
  }

}
