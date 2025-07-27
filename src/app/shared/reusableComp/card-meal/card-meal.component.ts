import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { Item } from '../../interfaces/meal';
import { AddbtnComponent } from "../addbtn/addbtn.component";
import { FirebaseService } from '../../../core/services/firebase/firebase.service';
import { AlertService } from '../../../core/services/alert/alert.service';
import { AuthService } from '../../../core/services/Authen/auth.service';


@Component({
  selector: 'app-card-meal',
  imports: [AddbtnComponent ],
  templateUrl: './card-meal.component.html',
  styleUrl: './card-meal.component.scss'
})
export class CardMealComponent implements OnInit {
  private firebaseService = inject(FirebaseService)
  private alertService = inject(AlertService)
  private authService = inject(AuthService)
  @Output() getMenuFromParent = new EventEmitter<void>();
  @Input() oneMeal!:Item 
  @Input() category!: string;
  isLoggedIn$:boolean = false
  showModal = signal(false);


 ngOnInit(): void {
    this.cheeckLogin()
  }

  cheeckLogin(){
   this.authService.isLoggedIn$.subscribe(status => {
    this.isLoggedIn$ = status;
  });
  }

   deletemeal(category: string, firebaseId: string){
    this.firebaseService.deleteMeal(category , firebaseId).subscribe({
      next:(res)=>{
        console.log(res)
         this.getMenuChild()
        this.alertService.success('تم حذف الوجبه من المنيو بنجاح')
      },
      error:(err)=> console.log(err)

    })

  }

   getMenuChild() {
    this.getMenuFromParent.emit();
  }

  toggleModal() {
  this.showModal.update(current => !current);
  }

  updateField(category: string, mealId: string ,field: string) {
    console.log(category)
    console.log(mealId)
    console.log(field)
  let value: any;
  const inputElement = document.getElementById(`${field}`) as HTMLInputElement;

  if (!inputElement) {
    alert('العنصر مش موجود في الصفحة');
    return;
  }

  if (field === 'offer') {
    value = inputElement.checked;
  } else {
    value = inputElement.value;
    console.log(`${field}`)
    if (!value) {
      alert('من فضلك أدخل قيمة');
      return;
    }
  }

  const updatedField = { [field]: value };

  this.sendUpdate(category , mealId  , updatedField)
  }

  sendUpdate(category: string, mealId: string, updatedField: any){
    this.firebaseService.updateMeal(category, mealId, updatedField)
    .subscribe({
      next: (res) => {
        console.log(res)
        this.getMenuChild()
       this.alertService.success(`تم تعديل  بنجاح ✅`)
      },
      error: (err) => {
        console.log(err)
        this.alertService.error(`حدث خطأ أثناء تعديل  ❌`)
       
      }
    });
  }


}
