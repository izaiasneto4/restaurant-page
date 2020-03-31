const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const logo = document.createElement('img');
  logo.src = 'https://i.ibb.co/SvkkzWC/kyoto-logo.png';

  const logoWrapper = document.createElement('a');
  logoWrapper.appendChild(logo);
  logoWrapper.href = 'index.html';

  nav.appendChild(logoWrapper);

  const menu = document.createElement('ul');
  nav.appendChild(menu);

  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');
  const aMenu = document.createElement('a');
  const aContact = document.createElement('a');
  aMenu.href = '#';
  aContact.href = '#';
  aMenu.innerHTML = 'Menu';
  aContact.innerHTML = 'Contact';
  liContact.appendChild(aContact);
  liMenu.appendChild(aMenu);

  menu.appendChild(liMenu);
  menu.appendChild(liContact);

  return nav;
};

export default navbar;
