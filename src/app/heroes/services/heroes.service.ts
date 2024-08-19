import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe | null> {
    return this.httpClient.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError(err => of(null))
      );
  }

  searchByTerm(term: string, limit = 6) {
    console.log({term})
    return this.httpClient.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${term}&_limit=${limit}`)
      .pipe(
        catchError(err => of([]))
      );
  }

}
