// MOBILE MENU

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));