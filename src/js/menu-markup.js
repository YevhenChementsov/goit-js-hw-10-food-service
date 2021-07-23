import menuElements from '../menu.json';
import menuTemplate from '../templates/menu-card.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = menuTemplate(menuElements);

menuRef.insertAdjacentHTML('beforeend', menuMarkup);


