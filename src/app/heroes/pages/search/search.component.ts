import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchInput = new FormControl('');
  public heroes: Heroe[] = [];
  public heroeSelected: Heroe | null = null;

  constructor(private heroesService: HeroesService) { }

  public searchByTerm(): void {
    const value = this.searchInput.value || '';

    this.heroesService.searchByTerm(value)
      .subscribe(heroes => this.heroes = heroes);
  }

  public onOptionSelected(event:  MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    if(!heroe) return;

    this.heroeSelected = heroe;
    this.searchInput.setValue(heroe.superhero);
  }

}
