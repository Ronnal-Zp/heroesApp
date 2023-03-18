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

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }


  login() {
    this.authService.loginByUsername(this.username)
      .subscribe( user => {
        console.log(user);
        console.log(user[0].id);
        if(user[0].id) {
          console.log(true);
          this.router.navigate(['./heroes'])
        }
      })
  }


  register() {
    this.router.navigate(['./auth/register'])
  }

}
