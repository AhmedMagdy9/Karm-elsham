import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  success(message: string, title: string = 'تم بنجاح') {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: title,
    text: message,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    toast: true
  });
}

  error(message: string, title: string = 'حدث خطأ') {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: 'حسناً',
    });
  }

  warning(message: string, title: string = 'تحذير') {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      confirmButtonText: 'متأكد',
    });
  }

  confirm(message: string, title: string = 'هل أنت متأكد؟'): Promise<boolean> {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم',
      cancelButtonText: 'إلغاء'
    }).then((result) => result.isConfirmed);
  }
}
