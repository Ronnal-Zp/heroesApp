import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { LayoutComponent } from './pages/layout/layout.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeroeComponent,
    ListComponent,
    NewComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
