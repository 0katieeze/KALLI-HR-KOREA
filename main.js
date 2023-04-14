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
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth"});
});


// Navbar toggle button for small screen
const navbarToggleBtn =  document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

// Career
const careerBtnContainer = document.querySelector(".career__screen");
const careerJobPostingJobsContainer = document.querySelector(".career__job__posting__jobs");
const careerJobPostingJobs = document.querySelectorAll(".job");
careerBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  careerJobPostingJobsContainer.classList.add('anim-out');
  careerJobPostingJobs.forEach((job) => {
    console.log(job.dataset.type);
    if(filter === "*" || filter === job.dataset.type) {
      job.classList.remove("invisible");
    } else {
      job.classList.add("invisible");
    }
    
  });

    setTimeout(() => {
      careerJobPostingJobsContainer.classList.remove('anim-out');
    }, 300);


});


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth"});
}



// form
// const form = document.getElementById('#submit__button');
// form.onclick = function() {
//   alert('Thank you!👏🏻🏻');
// }


// Popup
let popup = document.getElementById("#popup");

function openPopup() {
  popup.classList.add("open");
}

function closePopup() {
  popup.classList.remove("open");
}