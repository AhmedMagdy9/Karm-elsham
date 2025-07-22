import { Component, inject, Input } from '@angular/core';
import { Item } from '../../interfaces/meal';
import { OrderService } from '../../../core/services/order/order.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-addbtn',
  imports: [],
  templateUrl: './addbtn.component.html',
  styleUrl: './addbtn.component.scss'
})
export class AddbtnComponent {
  private OrderService = inject(OrderService)
  private alertService = inject(AlertService)
  @Input() oneMeal!:Item 


   getOrder() {
   const existingItem = this.OrderService.order.find(item => item.id === this.oneMeal.id);
   if (existingItem) {
    existingItem.quantity += 1;
     this.alertService.success('تم اضافة الوجبة بنجاح')  
  } else {
    this.OrderService.order.push({ ...this.oneMeal });  
    this.alertService.success('تم اضافة الوجبة بنجاح')  
  }
  localStorage.setItem('order', JSON.stringify(this.OrderService.order));
}
}
