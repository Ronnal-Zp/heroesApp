import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

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

}
