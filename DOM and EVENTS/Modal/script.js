'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('.hidden');
  overlay.classList.remove('.hidden');
};
const closeModal = () => {
  modal.classList.add('.hidden');
  overlay.classList.add('.hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  console.log('hi');
  btnOpenModal[i].addEventListener('click', () => {
    console.log('Button Clicked!');
    modal.classList.remove('.hidden');
    overlay.classList.remove('.hidden');
  });
}
