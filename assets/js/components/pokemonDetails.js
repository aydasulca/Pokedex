'use strict';

const PokemonDetails =() => {
  const modal = $('<div id="modal1" class="modal modal-fixed-footer cd"></div>');
  const x = $('<a href="#!" class="modal-action modal-close"><img class="poke-icon" src="assets/icon/cross-out.png" alt=""></a>')
  modal.append(x);
  return modal;
}
