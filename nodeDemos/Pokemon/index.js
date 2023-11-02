const pokemon = require("pokemon");

// console.log(pokemon.random());

// for (let i = 0; i < 5; i++) {
//   console.log(pokemon.random());
// }

let allPokemon = pokemon.all();
// console.log(allPokemon.length);

for (let i = 0; i < 5; i++) {
  let pokemonObject = {
    name: pokemon.random(),
    attackScore: Math.round(Math.random() * 100),
    defenseScore: Math.round(Math.random() * 100),
  };
  console.log(pokemonObject);
}

// let Bulbasaur = allPokemon[0];
// Bulbasaur = {
//   defenseScore: 1,
// };

// console.log(Bulbasaur.defenseScore);

// console.log(Bulbasaur);
