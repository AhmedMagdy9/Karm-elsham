import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Item, Meal } from '../../interfaces/meal';
import { AddbtnComponent } from "../addbtn/addbtn.component";

@Component({
  selector: 'app-card-offers',
  imports: [AddbtnComponent],
  templateUrl: './card-offers.component.html',
  styleUrl: './card-offers.component.scss'
})
export class CardOffersComponent {

 @Input() oneMeal!:Item 

}
