const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// автоматческий пересчет процентов
const counters = document.querySelectorAll('.skills__percentage'),
      lines = document.querySelectorAll('.skills__bar-percentage');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});