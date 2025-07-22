import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private baseUrl = 'https://my-orders-app-e7154-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  // ✅ إرسال أوردر
  sendOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders.json`, order);
  }

  // ✅ جلب كل الأوردرات
  getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders.json`).pipe(map(data => {
        return Object.entries(data).map(([id, order]) => ({ id, ...order }));
      })
    );
  }

  // ✅ جلب المنيو
  getMenu(): Observable<any> {
    return this.http.get(`${this.baseUrl}/menu.json`);
  }

  // ✅ تعديل أوردر
  updateOrder(orderId: string, updatedData: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/orders/${orderId}.json`, updatedData);
  }

  // ❌ حذف أوردر
  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/orders/${orderId}.json`);
  }
}
