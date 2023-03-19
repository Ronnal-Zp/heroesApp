import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/interfaces/general.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  voidError: boolean = false;
  usernameError: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }


  login() {

    if(this.username.length == 0) {
      this.voidError = true
      return;
    }

    this.voidError = false;

    this.authService.loginByUsername(this.username)
      .subscribe( user => {
        if(user.length > 0) {
          this.usernameError = false;
          this.router.navigate(['./heroes'])
        } else {
          this.usernameError = true;
        }
      })
  }


  register() {
    this.router.navigate(['./auth/register'])
  }

}
