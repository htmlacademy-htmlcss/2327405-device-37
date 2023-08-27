const modal = document.querySelector('.modal-wrapper');
const servicesLinkRare = document.querySelector('.services-link-rare');
const modalCloseButton = document.querySelector('.modal-close-button');
const bullitList = document.querySelector('.bulits-list');
const bullits = document.querySelectorAll('.bulit-button');

servicesLinkRare.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});


bullitList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('bulitButton')) {
    const activeBullit = evt.target;
    const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);
    setActiveScreen(indexCurrentBullit);
    shiftSlider(indexCurrentBullit);
    setActiveBullet(indexCurrentBullit);
  }
});
