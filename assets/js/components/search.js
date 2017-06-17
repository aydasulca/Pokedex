const SearchItem= (station,update) => {
  const search = $('<div class="col m3 space-between"></div>');
  const poke = $('<div class="container-img center"></div>')
  const img    = $('<img class="style-img" src="http://serebii.net/art/th/'+station.entry_number+'.png">');
  const divPoke = $('<div class="style-trapecio"></div>');
  const trapecio = $('<img class="trapecio" src="assets/img/trapecio.png" alt="">');
  const divicon = $('<div class="space-between tras"></div>');
  const icon = $('<div class="center"></div>');
  const span1 = $('<img class="poke-icon" src="assets/icon/data.png" alt="">');
  const span2 = $('<img class="poke-icon" src="assets/icon/pokeball_gray.png" alt="">');
  const span3 = $('<img class="poke-icon" src="assets/icon/valentines-heart.png" alt="">');
  const a = $('<a class="modal-trigger" href="#modal1"></a>');
  const modal = $('<div id="modal1" class="modal modal-fixed-footer cd"></div>');
  const name = $('<p>'+station.pokemon_species.name+'</p>');
  const containerD = $('<div class= "col m12"></div>');
//  const url = $('<p>'+$.get(station.pokemon_species.url, (n) => { return console.log(n.capture_rate)})+'</p>');

  search.append(poke);
  //search.append(containerD);
  poke.append(img);
  search.append(divPoke);
  divPoke.append(trapecio);
  divPoke.append(divicon);
  divicon.append(icon);
  icon.append(a);
  icon.append(modal);
  a.append(span2);
  icon.append(span3);
  icon.append(span1);
  divicon.append(name);
  //divicon.append(url);

  //poke.append(name);
  a.on('click',() => {
    $('.modal').modal();
    //alert("hola");
    /*
    $.get(station.pokemon_species.url,(n) => {
      $('.cd').html($('.cd').append(search));
    })
    */
  });


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
  const col4 = $('<div class = "col m5 text-AZ-style"></div>')
  const az = $('<div class = "az col m2 "> A-Z </div>')
  const containerpokemon = $('<div class=" col m12 "></div>');

  container.append(row);
  row.append(form);
  row.append(containerpokemon);
  form.append(rowInput);
  rowInput.append(divInput);
  rowInput.append(col4);
  col4.append(az);
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
