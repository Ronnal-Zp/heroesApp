import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';
import { ShowHeroeComponent } from './pages/show-heroe/show-heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListHeroeComponent
      },
      {
        path: 'add',
        component: AddHeroeComponent,
      },
      {
        path: 'edit/:id',
        component: AddHeroeComponent,
      },
      {
        path: 'search',
        component: SearchHeroeComponent
      },
      {
        path: ':id',
        component: ShowHeroeComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroesRoutingModule { }
