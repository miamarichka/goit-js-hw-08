import throttle from 'lodash.throttle';

const STORAGE_KEY = 'message';

const feedBackForm = document.querySelector('.feedback-form');
const emailInput = feedBackForm.elements.email;
const messageInput = feedBackForm.elements.message;

const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
let formData = storageData || {};

feedBackForm.addEventListener('input', throttle(onFormInput, 500));
feedBackForm.addEventListener('input', onFormInput);
feedBackForm.addEventListener('submit', onFormSubmit);

getLocaleStorageData();

function getLocaleStorageData() {
  if (storageData) {
    formData = storageData;
  }

  if (formData.email) {
    emailInput.value = formData.email;
  }

  if (formData.message) {
    messageInput.value = formData.message;
  }
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}
