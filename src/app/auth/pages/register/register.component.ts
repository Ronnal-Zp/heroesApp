import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario: string = '';
  email: string = '';
  isRegister: boolean = true;
  error: boolean = false;      

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  /**
   * Regresar al login
   */
  regresar() {
    this.router.navigate(['/', 'auth', 'login']);
  }

  
  /**
   * Validar registro
   * @returns 
   */
  validRegister() {

    if(this.usuario.length == 0 && this.email.length == 0) {
      this.error = true;
      return;
    }

    this.error = false;
    this.register()
  }

  /**
   * Registrar usuario
   */
  register() {
    this.authService.loginByUsername( this.usuario )
      .pipe(
        switchMap( (user) => {
          if(user.length == 0) return this.authService.register(this.usuario, this.email)
          else return of(null)
        })
      )
      .subscribe( (user) => {
          if(!user) this.isRegister = false
          else {
            const snackBarRef = this.snackBar.open('Registro exitoso', 'OK', {
              duration: 200,
              panelClass: 'text-success',
            })

            snackBarRef.afterDismissed().subscribe( response => {
              this.router.navigate(['/', 'heroes', 'list'])
            })
          }
      })
  }

}
