import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemons(size: number): Observable<any[]> {
    return this.httpClient.get<any[]>(
      this.URL + 'pokemon?offset=0&limit=' + size
    );
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      this.URL + 'pokemon/' + name + '/'
    );
  }
}
