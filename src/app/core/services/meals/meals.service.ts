import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '../../../shared/interfaces/meal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

 constructor(private http:HttpClient){}
 
  getAllItems():Observable<any>
  {
    return this.http.get<Meal[]>("assets/menu.json")
  }
}
