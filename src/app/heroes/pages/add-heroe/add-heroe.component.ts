import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../../../shared/interfaces/general.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss']
})
export class AddHeroeComponent implements OnInit {

  defaultHeroe: Heroe = {
    superhero: "",
    publisher: Publisher.DCComics,
    first_appearance: "",
    alter_ego: "",
    characters: "",
    alt_img: ""
  }
  

  constructor(
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    
  }


  saveHeroe() { 

    if( !(this.defaultHeroe.superhero.trim().length > 0) &&
        !(this.defaultHeroe.first_appearance.trim().length > 0) ) {
      return;
    }

    this.heroesService.addHeroe( this.defaultHeroe )
      .subscribe(heroe => {
        this.defaultHeroe = heroe
      })
    }
    
}
