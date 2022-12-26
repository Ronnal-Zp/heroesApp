import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Heroe } from '../../shared/interfaces/general.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private httpCliente: HttpClient ) { }


  getHeroes(): Observable<Heroe[]>{
    return this.httpCliente.get<Heroe[]>('http://localhost:3000/heroes');
  }

}
