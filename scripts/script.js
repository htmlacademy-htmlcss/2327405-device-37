const modal = document.querySelector('.modal-wrapper');
const servicesLinkRare = document.querySelector('.services-link-rare');
const modalCloseButton = document.querySelector('.modal-close-button');
const bullitList = document.querySelector('.bulits-list');
const bullits = document.querySelectorAll('.bulit-button');
const sliderList = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slider-item');
const sliderPrev = document.querySelector('.slider-button-left');
const sliderNext = document.querySelector('.slider-button-right');
const termsButtonList = document.querySelector('.services-list');
const termsButtons = document.querySelectorAll('.services-item .services-link');
const termsButtonsItems = document.querySelectorAll('.services-item');
const termsScreens = document.querySelectorAll('.service-item')

servicesLinkRare.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});


if (sliderList) {
  const setTabindex = () => {
    slides.forEach((item) => {
      item.querySelectorAll('a').forEach((link) => {
        link.tabIndex = -1
      })
    });

    document.querySelector('.slider-item-active').querySelectorAll('a').forEach((link) => {
      link.tabIndex = 0;
    })
  }

  setTabindex();

  const setActiveBullet = (index) => {
    document.querySelector('.bulit-current').classList.remove('bulit-current');
    Array.from(bullits)[index].classList.add('bulit-current');
  };


  const shiftSlider = (index) => {
    sliderList.style.transform = `translateX(${-1160 * index}px)`;
  };

  const setActiveScreen = (index) => {
    document.querySelector('.slider-item-active').classList.remove('slider-item-active');
    Array.from(slides)[index].classList.add('slider-item-active');

    setTabindex();

  };

  bullitList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('bulit-button')) {
      const activeBullit = evt.target;

      const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);

      console.log('indexCurrentBullit ', indexCurrentBullit);

      console.log('ok ', evt.target)
      //Присвоить активному экрану класс активности
      setActiveScreen(indexCurrentBullit);
      //Сдвинуть список - формула
      shiftSlider(indexCurrentBullit);

      //Присвоить класс активности буллита
      setActiveBullet(indexCurrentBullit)
    }
  });

  sliderPrev.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider-item-active');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
  });

  sliderNext.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider-item-active');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : slides.length;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
  });
}

if (termsButtonList) {

  const setActiveButton = (index) => {
    document.querySelector('.black-button').classList.remove('black-button');
    termsButtonsItems[index].classList.add('black-button');
  };

  const setActiveScreen = (index) => {
    document.querySelector('.current-item').classList.remove('current-item');
    Array.from(termsScreens)[index].classList.add('current-item');
  };

  termsButtonList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('services-link')) {
      const currentButton = evt.target;
      const index = Array.from(termsButtons).indexOf(currentButton);
      setActiveButton(index);
      setActiveScreen(index);
  }
})
}
