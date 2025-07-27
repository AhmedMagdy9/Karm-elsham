import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Item, Meal } from '../../../shared/interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private baseUrl = 'https://my-orders-app-e7154-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  
  //  إرسال أوردر
  sendOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders.json`, order);
  }

  //  جلب كل الأوردرات
  getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders.json`).pipe(map(data => {
        return Object.entries(data).map(([id, order]) => ({ id, ...order }));
      })
    );
  }

  //  جلب المنيو
   getMenu(): Observable<Meal[]> {
    return this.http.get(`${this.baseUrl}/menu.json`).pipe(
      map((res: any) => {
        const menu: Meal[] = [];

        for (const categoryName in res) {
          const itemsObj = res[categoryName].items || {};
          const items: Item[] = [];

          for (const firebaseId in itemsObj) {
            items.push({
              firebaseId,
              ...itemsObj[firebaseId]
            });
          }

          menu.push({ category: categoryName, items });
        }

        return menu;
      })
    );
  }

// حذف وجبة من المنيو
  deleteMeal(categoryApi: string, firebaseIdApi: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/menu/${categoryApi}/items/${firebaseIdApi}.json`);
}

  //  تعديل وجبة في المنيو 
 updateMeal(category: string, mealId: string, updatedField: any): Observable<any> {
  return this.http.patch(`${this.baseUrl}/menu/${category}/items/${mealId}.json`, updatedField);
}

  //  حذف أوردر
  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/orders/${orderId}.json`);
  }
 

}
