import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/meal';
import { OrderService } from '../../../core/services/order/order.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-card-order',
  imports: [],
  templateUrl: './card-order.component.html',
  styleUrl: './card-order.component.scss'
})
export class CardOrderComponent {
private OrderService = inject(OrderService)
private alertService = inject(AlertService)
@Output() onOrderChanged = new EventEmitter<void>();
@Input() oneMeal!:Item 



  removeOrder(id:number){
    const index = this.OrderService.order.findIndex(meal => meal.id === id);
     if (index !== -1) {
     this.OrderService.order.splice(index, 1);
     this.onOrderChanged.emit();
     this.alertService.success('تم حذف الوجبة بنجاح')
     this.OrderService.saveToStorage()
     }
   }

  updateOrder(id: number, quan: number) {
  const meal = this.OrderService.order.find(meal => meal.id === id);
  if (!meal) return;       
  if (quan === 0) {
    this.removeOrder(meal.id);
  } else {
    meal.quantity = quan;
      this.OrderService.saveToStorage()
      this.alertService.success('تم التعديل العدد')
  }
}

}
