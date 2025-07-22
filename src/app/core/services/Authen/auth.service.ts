// auth.service.ts
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private platformid = inject(PLATFORM_ID)
  private router = inject(Router)
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); 


  login(form:any) {
    this.isLoggedInSubject.next(true);
    localStorage.setItem('admin' , JSON.stringify(form))
    this.router.navigate(['/allorders'])
  }

  logout() {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('admin')
     this.router.navigate(['/home'])

  }

  private hasToken(): boolean {

    if (isPlatformBrowser(this.platformid)) {
      return !!localStorage.getItem('admin');
    }else{
       return false;
    }

    
  }
}
