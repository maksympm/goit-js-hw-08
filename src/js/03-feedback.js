import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onMessageInput, 500));

populateTextarea();

function onMessageInput(e) {
  formData[e.target.name] = e.target.value;
  const dataObj = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, dataObj);
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (savedData) {
    refs.textarea.value = parsedData.message;
    refs.email.value = parsedData.email;
    formData = parsedData;
  }
}
