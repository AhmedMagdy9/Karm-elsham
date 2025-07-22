import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';
import { Order } from '../../../shared/interfaces/orders';
import { HeaderComponent } from "../../../shared/reusableComp/header/header.component";
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-all-orders',
  imports: [HeaderComponent],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  private firebaseService = inject(FirebaseService)
  private alertService = inject(AlertService)

  AllOrders: WritableSignal<Order[]>  =signal([]) 
 


  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    this.firebaseService.getOrders().subscribe({
      next:(res)=>{
        console.log(res)
        this.AllOrders.set(res)
      },
      error:(err)=>{
         console.log(err)
      }

    })
  }

  completeOrder(orderId: string){
     this.firebaseService.deleteOrder(orderId).subscribe({
      next:(res)=>{
        console.log(res)
        this.getAllOrders()
        this.alertService.warning('تم حذف الطلب بنجاح Admin')

      },
      error:(err)=>{
         console.log(err)
      }

    })

  }

  getOrderTotal(order: any): number {
  return order.products.reduce((total: number, p: any) => total + (p.price * p.quantity), 0);
}

}
