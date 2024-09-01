import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'heroes-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public sideBarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add_circle',
      url: './new'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    }
  ]

  public logout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

  get user(): User | null {
    return this.authService.currentUser;
  }

}
