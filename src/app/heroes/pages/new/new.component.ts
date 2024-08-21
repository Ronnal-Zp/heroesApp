import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'heroes-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {

  public heroeForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      )
      .subscribe(heroe => {

        if(!heroe) return this.router.navigateByUrl('/');

        this.heroeForm.reset(heroe);
        return;
      })
  }

  get currentHero(): Heroe {
    const heroe = this.heroeForm.value as Heroe;
    return heroe;
  }

  public onSubmit(): void {
    if(this.heroeForm.invalid) return;

    if(this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe(heroe => {
          console.log(heroe);
        })
    } else {
      this.heroesService.addHero(this.currentHero)
        .subscribe(heroe => {
          console.log(heroe);
        })
    }
  }

}
