let switchTheme = document.querySelectorAll('.js-switch-theme');
for (var i = 0; i < switchTheme.length; i++) {
  switchTheme[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    if (this.dataset.theme) {
      switchToTheme(this.dataset.theme);
      return false;
    }
  });
}

function switchToTheme(theme) {
  Array.from(document.body.classList).forEach(className => {
    if (className.indexOf('theme') > -1) {
      document.body.classList.remove(className);
    }
  });

  document.body.classList.add(`theme-${theme}`);
  window.localStorage.setItem('theme', theme);
}

let theme = window.localStorage.getItem('theme');
if (theme) {
  switchToTheme(theme)
}
