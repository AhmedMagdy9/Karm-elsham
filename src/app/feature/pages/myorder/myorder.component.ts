import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../../core/services/order/order.service';
import { Item } from '../../../shared/interfaces/meal';
import { RouterLink } from '@angular/router';
import { CardOrderComponent } from "../../../shared/reusableComp/card-order/card-order.component";

@Component({
  selector: 'app-myorder',
  imports: [RouterLink, CardOrderComponent],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.scss'
})
export class MyorderComponent implements OnInit {
   private OrderService = inject(OrderService)
   order: Item[] = [];
   totalPrice = signal<number>(0);
   orderCheeck = signal<boolean>(true);

   ngOnInit(): void {
   this.getOrder()
   }

   getOrder(){
      this.order =  this.OrderService.order
    this.totalPrice.set( this.order.reduce((total, item) => total + (item.price * item.quantity), 0));
      console.log(this.order)
   }

   DeleteOrder(){
     this.order = []
     this.OrderService.order = []
     localStorage.removeItem('order')
     this.orderCheeck.set(false)

   }

}
