import './styles.css';
import menu from './menu';
import contact from './contact';

const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const mainSection = document.querySelector('.main');

const toggleContent = (content) => {
  mainSection.innerHTML = content;
};

menuBtn.addEventListener('click', () => toggleContent(menu));

contactBtn.addEventListener('click', () => {
  toggleContent(contact);
});
