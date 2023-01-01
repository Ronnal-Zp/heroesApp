import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../../shared/interfaces/general.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss']
})
export class ShowHeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private heroesService: HeroesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroeById( id ) )
    )
    .subscribe(res => this.heroe = res)
  }


  back() {
    this.router.navigateByUrl('/heroes/list')
  }

}
