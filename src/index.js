import './styles.css';
import menu from './menu';
import contact from './contact';
import footer from './footer';

const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const mainSection = document.createElement('div').classList.add('main');

const toggleContent = (content) => {
  mainSection.innerHTML = '';
  mainSection.appendChild(content);
  mainSection.appendChild(footer());
  document.body.appendChild(mainSection);
};

menuBtn.addEventListener('click', () => toggleContent(menu));

contactBtn.addEventListener('click', () => {
  toggleContent(contact());
});
