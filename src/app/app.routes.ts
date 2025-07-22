import { urlGuard } from './core/guards/url.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './feature/pages/home/home.component';
import { MenuComponent } from './feature/pages/menu/menu.component';
import { AboutusComponent } from './feature/pages/aboutus/aboutus.component';
import { ContactComponent } from './feature/pages/contact/contact.component';
import { MyorderComponent } from './feature/pages/myorder/myorder.component';
import { AllOrdersComponent } from './feature/pages/all-orders/all-orders.component';
import { LoginComponent } from './feature/pages/login/login.component';

export const routes: Routes = [
{path:"" , redirectTo:"home" , pathMatch:"full"},
{path:'home' , component : HomeComponent , title : 'home'},
{path:'menu' , component : MenuComponent , title : 'menu'},
{path:'myorder' , component : MyorderComponent , title : 'my order'},
{path:'abouteUs' , component : AboutusComponent , title : 'aboute Us'},
{path:'contact' , component : ContactComponent , title : 'contact'},
{path:'login' , component : LoginComponent , title : 'login'},
{path:'allorders' , component : AllOrdersComponent , canActivate:[urlGuard] , title : 'All orders'}
];
