import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { LayoutComponent } from './heroes/layout/layout.component';
import { ListComponent } from './heroes/list/list.component';
import { NewComponent } from './heroes/new/new.component';
import { SearchComponent } from './heroes/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    LayoutComponent,
    ListComponent,
    NewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
