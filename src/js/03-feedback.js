import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEL = document.querySelector('.js-input');
const messageEL = document.querySelector('.js-message');

formEl.addEventListener('input', throttle(handleSaveToLS, 500));
const formState = {};

function handleSaveToLS(e) {
  if (e.target.classList.contains('js-input')) {
    formState.email = e.target.value;
  }
  if (e.target.classList.contains('js-message')) {
    formState.message = e.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formState));
}

const parsedLocalData = JSON.parse(localStorage.getItem(localStorageKey));

if (parsedLocalData) {
  inputEL.value = parsedLocalData.email || '';
  messageEL.value = parsedLocalData.message || '';
}

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  if (inputEL.value === '' || messageEL.value === '') {
    return alert('Всі поля повинні бути заповнені.');
  }
  console.log(formState);
  inputEL.value = '';
  messageEL.value = '';
  formState.email = '';
  formState.message = '';
  localStorage.clear();
}
