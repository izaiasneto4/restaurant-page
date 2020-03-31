import './styles.css';
import menu from './modules/menu';
import contact from './modules/contact';
import footer from './modules/footer';

const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const mainSection = document.querySelector('.main');

const toggleContent = (content) => {
  mainSection.innerHTML = '';
  mainSection.appendChild(content);
  // mainSection.appendChild(footer());
  // document.body.appendChild(mainSection);
};

const firstPage = () => {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'The true flavors of Japan will surprise you.';
  mainSection.appendChild(h2);
};

firstPage();

menuBtn.addEventListener('click', () => toggleContent(menu()));

contactBtn.addEventListener('click', () => {
  toggleContent(contact());
});
