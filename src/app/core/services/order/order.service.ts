import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Item } from '../../../shared/interfaces/meal';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 order: Item[] = [];
 private platformid = inject(PLATFORM_ID)

 constructor(){
  if (isPlatformBrowser(this.platformid)) {
     if (localStorage.getItem('order')) {
    this.order = JSON.parse(localStorage.getItem('order')!)
       }
       }
 }

 clearOrder(): void {
  this.order = [];
  localStorage.removeItem('order'); 
}

saveToStorage() {
  localStorage.setItem('order', JSON.stringify(this.order));
}
 
}
