const menu = () => {
  const mainMenu = document.createElement('div');
  mainMenu.classList.add('menu');

  const menuTableDiv = document.createElement('div');
  menuTableDiv.classList.add('menu-table');

  mainMenu.appendChild(menuTableDiv);

  const table = document.createElement('table');
  menuTableDiv.appendChild(table);

  const tr1 = document.createElement('tr');
  table.appendChild(tr1);

  const dish = document.createElement('th');
  dish.innerHTML = 'Dish';
  tr1.appendChild(dish);

  const price = document.createElement('th');
  price.innerHTML = 'Price';
  tr1.appendChild(price);

  const tr2 = document.createElement('tr');
  table.appendChild(tr2);

  const onigri = document.createElement('th');
  onigri.innerHTML = 'Onigri';
  tr2.appendChild(onigri);

  const onigriPrice = document.createElement('th');
  onigriPrice.innerHTML = '$5';
  tr2.appendChild(onigriPrice);

  const tr3 = document.createElement('tr');
  table.appendChild(tr3);

  const sushi = document.createElement('th');
  sushi.innerHTML = 'Sushi';
  tr3.appendChild(sushi);

  const sushiPrice = document.createElement('th');
  sushiPrice.innerHTML = '$20';
  tr3.appendChild(sushiPrice);

  const tr4 = document.createElement('tr');
  table.appendChild(tr4);

  const okonomiyaki = document.createElement('th');
  okonomiyaki.innerHTML = 'Okonomiyaki';
  tr4.appendChild(okonomiyaki);

  const okonomiyakiPrice = document.createElement('th');
  okonomiyakiPrice.innerHTML = '$10';
  tr4.appendChild(okonomiyakiPrice);

  const tr5 = document.createElement('tr');
  table.appendChild(tr5);

  const takoyaki = document.createElement('th');
  takoyaki.innerHTML = 'Takoyaki';
  tr5.appendChild(takoyaki);

  const takoPrice = document.createElement('th');
  takoPrice.innerHTML = '$10';
  tr5.appendChild(takoPrice);

  return mainMenu;
};

export default menu;
