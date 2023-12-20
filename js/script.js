//SELEZIONI I NODI DAL DOM

const openBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-menu");
const anchorRespMenu = document.querySelectorAll(
  ".menu-container .inner-menu ul li .anchor-style"
);
const anchorDesktop = document.querySelectorAll(".anchor-style");
console.log(anchorDesktop);
const panels = gsap.utils.toArray(".panel");

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {


  //TIMELINE
  var TL = gsap.timeline();

  TL.from(".map-img.intro-img", {
    scale: 3,
    duration: 2
  })

  TL.to(".mask p", {
    y: "0%",
  })

  TL.to("#site-container .hero.panel .col-50", {
    y: "0%",
    duration: 0.8,
  }, "<")

  TL.to(".bottle-img-container", {
    y: "-50%",
    duration: 0.8,
  }, "<")

  TL.to(".mask p", {
    opacity: 0.1,
    duration: 0.5,
    ease: "power2"
  })

  TL.to("header nav .d-flex", {
    top: 75
  }, "<")

  TL.to(".navbar-brand", {
    top: 75
  })

  TL.to(".try", {
    top: 75
  }, "<")

  TL.from(".discover", {
    autoAlpha: 0,
    duration: 0.5,
  })

  TL.to(".hastag", {
    bottom: 50
  })

  TL.to(".toscoro", {
    bottom: 40
  }, "<")

  gsap.to(".intro .content", {
    position: "fixed",
    y: -scrollY + "px",
    scrollTrigger: {
      trigger: "#about",
      scrub: true,
      start: "top 80%",
      end: "top 80%",
      // markers: true,
    },
  });


  //COLORE DELLE ANCORE NERO ALL'HOVER SU SFONDO BIANCO
  anchorDesktop.forEach(function (el) {
    gsap.to(el, {
      className: "anchor-style-dark",
      scrollTrigger: {
        trigger: "#ingredient",
        scrub: true,
        start: "top 10%",
        end: "top 0%",
      },
    });
  });

  //COLORE DEL LOGO BALSOY CHE DIVENTA NERO
  gsap.to("header .navbar-brand svg .balsy > *", {
    fill: "#000000",
    scrollTrigger: {
      trigger: "#ingredient",
      scrub: -1,
      start: "top 10%",
      end: "top 0%",
      // markers: true,
    },
  });

  //COLORE DEL BOTTONE ESSAYER CHE DIVENTA NERO
  gsap.to(".try", {
    className: "try-dark",
    scrollTrigger: {
      trigger: "#ingredient",
      scrub: true,
      start: "top 10%",
      end: "top 0%",
      // markers: true,
    },
  });

  //ACTIVE LINK SU DESKTOP IN BASE ALLO SCROLL DELLA SEZIONE

  //TOGGLE MENU SU RESPONSIVE

  openBtn.addEventListener("click", function () {
    gsap.to(".menu-container", {
      y: 0,
      ease: "Power4.easeInOut",
      duration: 0.6,
    });

    gsap.from(".inner-menu", {
      autoAlpha: 0,
      duration: 1,
    });

    gsap.from(closeBtn, {
      autoAlpha: 0,
      delay: 0.5,
    });
  });

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    gsap.to(closeBtn, {
      opacity: 0,
    });

    gsap.to(".menu-container", {
      y: "-100%",
      ease: "Power4.easeInOut",
      duration: 0.8,
      delay: 0.2,
    });

    gsap.to(".inner-menu", {
      opacity: 0,
    });

    gsap.to(closeBtn, {
      opacity: 1,
      delay: 1,
    });

    gsap.to(".inner-menu", {
      opacity: 1,
      delay: 1,
    });
  });

  anchorRespMenu.forEach(function (el) {
    el.addEventListener("click", function () {
      gsap.to(".menu-container", {
        y: "-100%",
        ease: "Power4.easeInOut",
        duration: 0.8,
        delay: 0.2,
      });
    });
  });

  //FINE TOGGLE MENU

  gsap.from(".map-italy", {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#about",
      scrub: true,
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
    },
  });

  gsap.to(".discover .discover-anchor", {
    display: "none",
    scrollTrigger: {
      trigger: ".discover",
      scrub: true,
      start: "top 80%",
      end: "top 80%",
      // markers: true,
    },
  });

  gsap.to(".discover .arrow", {
    autoAlpha: 0,
    y: 0,
    ease: "slow",
    duration: 1.5,
    repeat: -1,
  });

  gsap.from(".map-japan", {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#about-soja",
      scrub: true,
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
    },
  });

  gsap.to(".shadow", {
    display: "none",
    scrollTrigger: {
      trigger: "#about-soja",
      scrub: true,
      start: "top 50%",
      end: "bottom 80%",
      // markers: true
    },
  });

  gsap.to(".flower-left-container, .flower-right-container", {
    autoAlpha: 1,
    scale: 1,
    y: "-50%",
    x: "0%",
    scrollTrigger: {
      trigger: "#ingredient",
      scrub: true,
      start: "top 50%",
      end: "top: 40%",
    },
  });

  gsap.to(".bottle-img-container", {
    top: "-100%",
    scrollTrigger: {
      trigger: "#chef",
      scrub: true,
      start: "top: 100%",
    },
  });
});

