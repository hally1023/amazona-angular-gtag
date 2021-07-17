import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderCreatePayload } from '../actions/order/create.actions';
import { Order } from '../models/order.model';
import { apiUrl } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = apiUrl;
  constructor(private http: HttpClient) {}

  public createOrder(order: OrderCreatePayload) {
    return this.http.post<{ order: Order; message: string }>(
      `${this.apiUrl}/orders`,
      order
    );
  }
}
