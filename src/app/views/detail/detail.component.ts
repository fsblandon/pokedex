import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [PokemonService]
})
export class DetailComponent implements OnInit {

  itemiD: any;

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.itemiD = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(this.itemiD).subscribe(
      (data) =>  {
        this.pokemon = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
