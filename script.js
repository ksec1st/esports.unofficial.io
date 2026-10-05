/* =========================================
   LOADING
========================================= */

window.addEventListener("load", () => {

  const loading = document.getElementById("loading");

  setTimeout(() => {

    loading.classList.add("loaded");

  }, 1600);

});


/* =========================================
   HEADER
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

const mobileLinks =
  mobileMenu.querySelectorAll("a");


menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});


mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

  });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {

  observer.observe(element);

});


/* =========================================
   HERO PARALLAX
========================================= */

const hero =
  document.querySelector(".hero");

const heroGrid =
  document.querySelector(".hero-grid");


window.addEventListener("scroll", () => {

  if (!heroGrid) return;

  const scroll =
    window.scrollY;

  if (scroll < window.innerHeight) {

    heroGrid.style.transform =
      `translateY(${scroll * 0.18}px)`;

  }

});


/* =========================================
   SMOOTH INTERNAL LINKS
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (
        targetId === "#" ||
        !targetId
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });
