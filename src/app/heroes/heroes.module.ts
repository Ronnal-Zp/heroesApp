import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { LayoutComponent } from './pages/layout/layout.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './components/card/card.component';
import { HeroeImgPipe } from './pipes/hero-img.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeroeComponent,
    ListComponent,
    NewComponent,
    SearchComponent,
    CardComponent,

    HeroeImgPipe,
      ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
