import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PokemonService]
})
export class HomeComponent implements OnInit {

  Pokemons: Pokemon[] = [];
  numberCards: number;

  searchForm: FormGroup

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.numberCards = 50;
    this.pokemonService.getPokemons(this.numberCards).subscribe(
      (data: any) => {
        data.results.filter(p => {
          this.pokemonService.getPokemon(p.name).subscribe(
            (pok) => {
              this.Pokemons.push(pok);
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (error) => {
        console.log(error);
      }
    );

    this.searchForm = this.formBuilder.group({
      search: ['', Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')],
    });
  }

  search() {
    console.log(this.searchForm.value.search);
    this.Pokemons = [];
    this.pokemonService.getPokemon(this.searchForm.value.search).subscribe(
      (pok) => {
        this.Pokemons.push(pok);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
