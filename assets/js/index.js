'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search(_ => render(root)));
  wrapper.append(PokemonDetails(_ => render(root)));

root.append(wrapper);

}

const state = {
  stations: null,
  selectedStation: null,
};

$( _ =>{

  getJSON("https://pokeapi.co/api/v2/pokedex/1/", (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

  const root = $(".root");
  render(root);
});


});
