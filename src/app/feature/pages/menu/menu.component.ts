import { Component, inject, OnInit, signal } from '@angular/core';
import { Meal } from '../../../shared/interfaces/meal';
import { MealsService } from '../../../core/services/meals/meals.service';
import { FormsModule } from '@angular/forms';
import { CardMealComponent } from "../../../shared/reusableComp/card-meal/card-meal.component";
import { HeaderComponent } from "../../../shared/reusableComp/header/header.component";
import { SidebarComponent } from "../../../shared/reusableComp/sidebar/sidebar.component";
import { FirebaseService } from '../../../core/services/firebase/firebase.service';

@Component({
  selector: 'app-menu',
  imports: [FormsModule, CardMealComponent, HeaderComponent, SidebarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
 private firebaseService = inject(FirebaseService)


 menuItems = signal<Meal[]>([]);
 searchWord:string = '';




  ngOnInit(): void {
    this.getMenu()
   
  }


   getMenu(){
    this.firebaseService.getMenu().subscribe({
      next : (res)=>{
        this.menuItems.set(res)
        console.log(res)
      },
      error:(err)=>
        console.log(err)
    })
  }


  deletemeal(category: string, firebaseId: string){
    this.firebaseService.deleteMeal(category , firebaseId).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=> console.log(err)

    })

  }

  
}
