const SearchItem= (station,update) => {
  const search = $('<div class="col m3 flex-center cont-img"></div>');
  const poke = $('<div class="cont-poke center"></div>')
  const img    = $('<img class="style-img" src="http://serebii.net/art/th/'+station.entry_number+'.png">');
  const divPoke = $('<div class="style-trapecio"></div>');
  //const name = $('<p>'+station.pokemon_species.name+'</p>');
  const trapecio = $('<img src="assets/img/trapecio.png" alt="">')

  search.append(poke);
  poke.append(img);
  search.append(divPoke);
  divPoke.append(trapecio);

  //poke.append(name);
  return search;
  };

const reRender = (containerpokemon, encontrandoPokemon) => {
  containerpokemon.empty();
  encontrandoPokemon.forEach(n => {
    //console.log(n);
    containerpokemon.append(SearchItem(n,_ =>{reRender(containerpokemon, encontrandoPokemon)}));
  });
}

const Search = (update) => {
  const container = $('<div class="pokedex-container"></div>');
  const row = $('<div class="row"></div>');
  const form = $('<form class="col m12"></form>');
  const rowInput = $('<div class="row"></div>');
  const divInput = $('<div class="input-field col m6"></div>');
  const i = $('<i class="material-icons prefix">search</i>');
  const input = $('<input class="icon_telephone" type="tel" class="validate">');
  //const label = $('<label for="icon_telephone">Name</label>');
  const containerpokemon = $('<div class=" col m12 "></div>');

  container.append(row);
  row.append(form);
  row.append(containerpokemon);
  form.append(rowInput);
  rowInput.append(divInput);
  divInput.append(i);
  divInput.append(input);
//  divInput.append(label);

  input.on('keyup', (e) => {
    if(input.val() != "") {
      var encontrandoPokemon= filterByDistrict(state.stations.pokemon_entries, input.val());
    //  console.log(encontrandoPokemon);
      reRender(containerpokemon, encontrandoPokemon);
    }

  });
  reRender(containerpokemon, filterByDistrict(state.stations.pokemon_entries, ""));

  return container;
}
