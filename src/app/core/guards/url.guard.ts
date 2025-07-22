import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const urlGuard: CanActivateFn = (route, state) => {
 

  let PlatformID = inject(PLATFORM_ID)


  let router = inject(Router)

  if (isPlatformBrowser(PlatformID)) {
    
    
  if (localStorage.getItem('admin') != null) {

    return true
    
  }

  }
  
  router.navigate(['/home'])

  return false

};
