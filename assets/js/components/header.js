'use strict'

const Header = (update) => {
  const header = $('<header></header>');
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col m12"></div>');
  const title = $('<h1 class="center-align color-title">Pokédex</h1>');

  header.append(container);
  container.append(row);
  row.append(col);
  col.append(title);

  return header;
}
