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

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }


  login() {
    this.authService.login('1')
      .subscribe( user => {
        if(user.id) {
          this.router.navigate(['./heroes'])
        }
      })
  }

}
