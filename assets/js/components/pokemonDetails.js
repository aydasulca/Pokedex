'use strict';

const PokemonDetails =(station) => {
  const modal = $('<div id="modal1" class="modal modal-fixed-footer cd"></div>');
  const content = $('<div class="modal-content">');
  const x = $('<a href="#!" class="modal-action modal-close md"><img class="poke-icon" src="assets/icon/cross-out.png" alt=""></a>');
//  const name = $('<p class="style-name">'+station.pokemon_species.name+'</p>');
  //console.log(name);

  //const url = $('<p>'+$.get(station.pokemon_species.url, (n) => { return console.log(n.capture_rate)})+'</p>');
  modal.append(content);
  content.append(x);
  //modal.append(name)
  //modal.append(SearchItem('http://serebii.net/art/th/'+station.entry_number+));
  return modal;
  //$( ".md" ).clone().appendTo( ".cd" );
}

/*
const pokDetalle2 = (figura) => {
  $('modal-content').empty();
  const titulo = $('<h1></h1>');
  $('modal-content').append(titulo);
$('modal-content').append(figura);
  return titulo
}
*/
