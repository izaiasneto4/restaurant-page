import './styles.css';
import menu from './modules/menu';
import contact from './modules/contact';
import footer from './modules/footer';
import navbar from './modules/navbar';

const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const mainSection = document.querySelector('.main');

const toggleContent = (content) => {
  mainSection.innerHTML = '';
  mainSection.appendChild(content);
};

const firstPage = () => {
  document.body.appendChild(navbar());
  const h2 = document.createElement('h2');
  h2.innerHTML = 'The true flavors of Japan will surprise you.';
  mainSection.appendChild(h2);
  document.body.appendChild(footer());
};

firstPage();

menuBtn.addEventListener('click', () => toggleContent(menu()));

contactBtn.addEventListener('click', () => {
  toggleContent(contact());
});
