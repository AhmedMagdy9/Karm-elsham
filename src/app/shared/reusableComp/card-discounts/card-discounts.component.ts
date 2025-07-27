import { Component,  Input } from '@angular/core';
import { Item, Meal } from '../../interfaces/meal';
import { AddbtnComponent } from "../addbtn/addbtn.component";


@Component({
  selector: 'app-card-discounts',
  imports: [AddbtnComponent],
  templateUrl: './card-discounts.component.html',
  styleUrl: './card-discounts.component.scss'
})
export class CardDiscountsComponent {

   @Input() oneMeal!:Item 
  @Input() discountNum:number = 25
 
}
