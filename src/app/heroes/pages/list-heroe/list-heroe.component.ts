import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../../shared/interfaces/general.interface';

@Component({
  selector: 'app-list-heroe',
  templateUrl: './list-heroe.component.html',
  styleUrls: ['./list-heroe.component.scss']
})
export class ListHeroeComponent implements OnInit {


  heroes: Heroe[] = [];


  constructor(private heroesService: HeroesService) { }


  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(res => {
      this.heroes = res;
    })
  }

}
