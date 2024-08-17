import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'heroes-heroe-page',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent implements OnInit {

  public heroe?: Heroe | null;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroeById( id ))
    )
    .subscribe(heroe => {
      if(!heroe) this.router.navigate(['/heroes']);

      this.heroe = heroe
    })
  }

}
