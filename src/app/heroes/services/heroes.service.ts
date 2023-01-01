import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Heroe } from '../../shared/interfaces/general.interface';
import { environment } from "./../../../environments/environmets";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL = environment.baseURL;

  constructor( private httpCliente: HttpClient ) { }


  /**
   * 
   * @returns Heroe[]
   */
  getHeroes(): Observable<Heroe[]> {
    return this.httpCliente.get<Heroe[]>(`${ this.baseURL }/heroes`);
  }

  /**
   * 
   * @param id 
   * @returns Heroe
   */
  getHeroeById(id: string | null): Observable<Heroe> {
    return this.httpCliente.get<Heroe>(`${ this.baseURL }/heroes/${ id }`);
  }

}
