import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroeComponent } from './heroes/pages/heroe/heroe.component';
import { LayoutComponent } from './heroes/pages/layout/layout.component';
import { ListComponent } from './heroes/pages/list/list.component';
import { NewComponent } from './heroes/pages/new/new.component';
import { SearchComponent } from './heroes/pages/search/search.component';

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
