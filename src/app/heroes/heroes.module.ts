import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';


import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { ShowHeroeComponent } from './pages/show-heroe/show-heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImgRoutePipe } from './pipes/img-route.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddHeroeComponent,
    SearchHeroeComponent,
    ShowHeroeComponent,
    HomeComponent,
    ListHeroeComponent,
    HeroeCardComponent,
    ImgRoutePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class HeroesModule { }
