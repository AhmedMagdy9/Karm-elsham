import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../../core/services/order/order.service';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private orderService = inject(OrderService)
  private firebaseService = inject(FirebaseService)
  private alertService = inject(AlertService)

 userDetails: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(8), Validators.pattern(/^[\u0600-\u06FFa-zA-Z\s]+$/) ]),
    address: new FormControl('', [ Validators.required, Validators.minLength(10), Validators.pattern(/^[\u0600-\u06FFa-zA-Z\s]+$/) ]),
    phone: new FormControl('', [  Validators.required,  Validators.pattern(/^01[0125][0-9]{8}$/)  ]),
    occasion: new FormControl(false) 
  });

  submit() {
    if (this.userDetails.valid && this.orderService.order.length !== 0 ) {
      let fullOrder = {"products":this.orderService.order,"customer":this.userDetails.value }
      this.sendOrder(fullOrder)

      
    } else {
      this.userDetails.markAllAsTouched();
      this.alertService.error(' لا يوجد منتجات !')
    }
  }

  sendOrder(OrderData:any){
    this.firebaseService.sendOrder(OrderData).subscribe({
      next:(res)=>{
       if (res && res.name){
        this.orderService.clearOrder()
          this.alertService.success('✅ الطلب تم إرساله بنجاح!')
        }
       
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
