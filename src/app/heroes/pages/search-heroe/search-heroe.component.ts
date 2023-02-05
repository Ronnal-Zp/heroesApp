import { Component, OnInit } from '@angular/core';
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
  heroeSeleccionado!: Heroe;

  constructor(
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  

  seleccionarHeroe(event: MatAutocompleteSelectedEvent) {
    let heroe: Heroe = event.option.value;
    this.heroeService.getHeroeById(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe)
  }


  buscar() {
    this.heroeService.getSugerencia(this.termino)
    .subscribe(heroes => this.heroes = heroes)
  }

}
