import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroesService.getHeroeById( id ) )
        )
        .subscribe(heroe => {
          this.defaultHeroe = heroe
        })
    }    
    
  }


  saveHeroe() { 

    if( !(this.defaultHeroe.superhero.trim().length > 0) &&
        !(this.defaultHeroe.first_appearance.trim().length > 0) ) {
      return;
    }


    if (this.defaultHeroe.alt_img?.length == 0) {
      this.defaultHeroe.alt_img = "assets/no-image.png";
    }


    if( this.defaultHeroe.id ) {

      this.heroesService.updateHeroe( this.defaultHeroe )
        .subscribe(heroe => {
          this.defaultHeroe = heroe
        });

    } else {

      this.heroesService.addHeroe( this.defaultHeroe )
        .subscribe(heroe => {
          this.defaultHeroe = heroe
          this.router.navigate(['/heroes/edit', `${heroe.id}`]);
        })

    }
  }

    
}
