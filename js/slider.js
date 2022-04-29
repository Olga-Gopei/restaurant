const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    650: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3,
    }
  },
});

const wrapNavSection = document.querySelector('.wrap-nav-section');
const menuSection = document.querySelector('.menu');

function changeStyles(x) {
  if (x.matches) {
    wrapNavSection.style.display = "none";
    menuSection.style.display = "block";
  } else {
    wrapNavSection.style.display = "flex";
    menuSection.style.display = "none";
  }
}

const mediaQueryList = window.matchMedia("(max-width: 700px)");
changeStyles(mediaQueryList)
mediaQueryList.addListener(changeStyles)




