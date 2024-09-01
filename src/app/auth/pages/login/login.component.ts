import { Component } from '@angular/core';
import { AuthService } from '../../../heroes/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login('ronn.zp.3@gmail.com', '12345')
      .subscribe(res => {
        this.router.navigate(['/']);
      })
  }

}
