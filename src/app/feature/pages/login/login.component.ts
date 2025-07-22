import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/Authen/auth.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 private authService = inject(AuthService)
 private alertService = inject(AlertService)

userForm: FormGroup = new FormGroup({
  username: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{2,}$') ]),
  password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$') ])
});

 submitForm() {
    if (this.userForm.valid) {
      if (this.userForm.value.username == 'adminadmin' && this.userForm.value.password == 'Admin1999' ) {
         this.authService.login(this.userForm.value)
         this.alertService.success('مرحبا Admin 🕴️')
      }else{this.alertService.warning('انت لست Admin 🧑 ')}
     
    }
  }
}
