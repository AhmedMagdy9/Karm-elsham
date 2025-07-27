
import { Component, inject, OnInit, signal } from '@angular/core';
import { Meal } from '../../../shared/interfaces/meal';
import { CardDiscountsComponent } from "../../../shared/reusableComp/card-discounts/card-discounts.component";
import { CardOffersComponent } from "../../../shared/reusableComp/card-offers/card-offers.component";
import { MealsService } from '../../../core/services/meals/meals.service';
import { HeaderComponent } from "../../../shared/reusableComp/header/header.component";
import { SidebarComponent } from '../../../shared/reusableComp/sidebar/sidebar.component';
import { FirebaseService } from '../../../core/services/firebase/firebase.service';


@Component({
  selector: 'app-home',
  imports: [CardDiscountsComponent, CardOffersComponent, HeaderComponent , SidebarComponent  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {

 menuItems = signal<Meal[]>([]);
 private mealsService = inject(MealsService)
 private firebaseService = inject(FirebaseService)
 

  ngOnInit(): void {
    this.getMenu()
    
   
   
  }


  

  getMenu(){
   this.firebaseService.getMenu().subscribe({
  next: (res) => {
    this.menuItems.set(res) ;

    console.log(res)
  },
  error: (err) => {
    console.error('حصل خطأ في تحميل المنيو:', err);
    // ممكن تعرض alert أو toast هنا
  },
  
});
  }




}
