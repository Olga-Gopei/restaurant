const renderCard = (burgerInfo) => {
  const swiperSlide = document.createElement('div');
  swiperSlide.className = 'swiper-slide';

  const slideBurg = document.createElement('div');
  slideBurg.className = 'slide-burg';
  swiperSlide.appendChild(slideBurg);

  const innerBurgerCard = document.createElement('div');
  innerBurgerCard.className = 'inner-burger-card';
  slideBurg.appendChild(innerBurgerCard);

  const imgBurger = document.createElement('img');
  imgBurger.className = 'img-burger';
  imgBurger.src = `images/imeges/${burgerInfo.img}`;
  innerBurgerCard.appendChild(imgBurger);


  const burgerMax = document.createElement('h2');
  burgerMax.className = 'burger-max';
  burgerMax.innerHTML = burgerInfo.name;
  innerBurgerCard.appendChild(burgerMax);

  return swiperSlide;

}



const renderMain = (burgerList) => {
  const swiper = document.querySelector('.swiper-wrapper');

  burgerList.forEach(burger => {
    const card = renderCard(burger);
    swiper.appendChild(card);
  });

}
renderMain(burgerList)

