'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
console.log(window.scrollY);
console.log(`navbarHeight: ${navbarHeight}`);
if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } 
  scrollIntoView(link);
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth"});
});

// Handle click on "Find the right career" button on home to "Career"
const homeFindBtn = document.querySelector('.home__find');
homeFindBtn.addEventListener('click', () => {
  scrollIntoView('#career');
  // const scrollTo = document.querySelector('#career');
  // scrollTo.scrollIntoView({ behavior: "smooth"});

});

// Show "UpBtn" button when scrolling down
const UpBtn = document.querySelector('.upBtn');
document.addEventListener('scroll', () => {
  const homeHeight = home.getBoundingClientRect().height;
  if(window.scrollY > homeHeight / 2) {
    UpBtn.classList.add('visible');
  } else {
    UpBtn.classList.remove('visible');

  }
});

// Handle click on the "upBtb" button
UpBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth"});
}