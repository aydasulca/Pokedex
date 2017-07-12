'use strict';

const PokemonDetails =(station) => {
  const rowModal = $('<div class="row"></div>');
  const modal = $('<div id="modal1" class=" modal modal-fixed-footer "></div>');
  const content = $('<div class="modal-content col m12"></div>');
  const modalImg = $('<div class="col m5"></div>');
  const Img = $('<div class="col m8 offset-m3  poke-content space-between"></div>');
  const modalInfo =$('<div class="col m6"></div>');
  const pokeName = $('<div class="col m12 pokeName"></div>');
  const information = $('<div class="col m12 pokeInfo"><p></p></div>');
  const description = $('<div class="col m12 "></div>');
  const x = $('<a href="#!" class="col m1 modal-action modal-close"><img class="poke-icon" src="assets/icon/cross-out.png" alt=""></a>');


  rowModal.append(modal);
  modal.append(content);
  content.append(modalImg);
  modalImg.append(Img);
  content.append(modalInfo);
  modalInfo.append(pokeName);
  modalInfo.append(information);
  modalInfo.append(description);
  content.append(x);


   $.get("https://pokeapi.co/api/v2/", (response) => {
     console.log(response);
   })
  return rowModal;


}
