import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from 'src/app/shared/interfaces/general.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.scss']
})
export class SearchHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';
  heroeSeleccionado: Heroe | null = null;

  constructor(
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  seleccionarHeroe(event: MatAutocompleteSelectedEvent) {
    let heroeid: string = event.option.value;

    if(heroeid == "") {
      this.heroeSeleccionado = null;
      return;
    }

    this.heroeService.getHeroeById(heroeid!)
      .subscribe(heroe => this.heroeSeleccionado = heroe)
  }


  buscar() {
    this.heroeService.getSugerencia(this.termino)
    .subscribe(heroes => this.heroes = heroes)
  }

}
