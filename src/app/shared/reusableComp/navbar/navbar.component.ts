import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, WritableSignal, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/Authen/auth.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit  {
private authService = inject(AuthService)
 private alertService = inject(AlertService)
 
 isLoggedIn$:boolean = false

 ngOnInit(): void {
  this.authService.isLoggedIn$.subscribe(status => {
    this.isLoggedIn$ = status;
  });
 }

 logout(){
  this.authService.logout()
  this.alertService.warning('تم تسجيل الخروج من Admin mode')
 }

}
