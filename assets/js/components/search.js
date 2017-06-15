const SearchItem= (station,update) => {
  const search =$('<div class="col m12">'+station.pokemon_species.name+'</div>');
  const img    = $('<img src="http://serebii.net/art/th/'+station.entry_number+'.png">');

  search.append(img);
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
  const row = $('<div class="row"></div>');
  const form = $('<form class="col m12"></form>');
  const rowInput = $('<div class="row"></div>');
  const divInput = $('<div class="input-field col m6"></div>');
  const i = $('<i class="material-icons prefix">search</i>');
  const input = $('<input class="icon_telephone" type="tel" class="validate">');
  //const label = $('<label for="icon_telephone">Name</label>');
  const containerpokemon = $('<div class="col m12 containerpokemon"></div>');

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

  return row;
}
