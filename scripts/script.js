const modal = document.querySelector('.modal-wrapper');
const servicesLinkRare = document.querySelector('.services-link-rare');
const modalCloseButton = document.querySelector('.modal-close-button');

servicesLinkRare.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});
