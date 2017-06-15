'use strict';

const filterByDistrict = (stations,query) => {
  const filterpokemon = stations.filter((e) =>{
    return e.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase())!= -1;
  });
    return filterpokemon;
    console.log(filterpokemon)
};
