const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchButtonRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

// ========== По умолчанию тема светлая ==========

bodyRef.classList.add(Theme.LIGHT);

const theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  themeSwitchButtonRef.checked = true;
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
};

// ========== Изменение темы ==========

themeSwitchButtonRef.addEventListener('change', onChangeThemeToggleClick);
  
function onChangeThemeToggleClick(event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
