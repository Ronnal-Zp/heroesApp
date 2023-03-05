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


  /**
   * 
   * @param termino 
   * @param limit 
   * @returns Heroe[]
   */
  getSugerencia(termino: string | null, limit: number = 5): Observable<Heroe[]> {
    return this.httpCliente.get<Heroe[]>(`${this.baseURL}/heroes?q=${termino}&limit=${limit}`)
  }


  /**
   * 
   * @param Heroe 
   * @returns Heroe
   */
  addHeroe(heroe: Heroe): Observable<Heroe> {
    return this.httpCliente.post<Heroe>(`${ this.baseURL }/heroes`, heroe)
  }

}
