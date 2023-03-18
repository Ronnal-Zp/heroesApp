import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario: string = '';
  email: string = '';
  isRegister: boolean = false;


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  register() {

  }

}
