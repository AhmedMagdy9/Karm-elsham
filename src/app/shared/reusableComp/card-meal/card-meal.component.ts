import { Component, inject, Input } from '@angular/core';
import { Item } from '../../interfaces/meal';
import { OrderService } from '../../../core/services/order/order.service';
import { AddbtnComponent } from "../addbtn/addbtn.component";

@Component({
  selector: 'app-card-meal',
  imports: [AddbtnComponent ],
  templateUrl: './card-meal.component.html',
  styleUrl: './card-meal.component.scss'
})
export class CardMealComponent {

  @Input() oneMeal!:Item 

//  speak(text: string) {
//   const msg = new SpeechSynthesisUtterance(text);
//   msg.lang = 'ar-EG';

//   // نحاول نختار صوت عربي من الأصوات المتاحة
//   const voices = window.speechSynthesis.getVoices();
//   const arabicVoice = voices.find(v => v.lang.includes('ar'));

//   if (arabicVoice) {
//     msg.voice = arabicVoice;
//   }

//   window.speechSynthesis.speak(msg);
// }
}
