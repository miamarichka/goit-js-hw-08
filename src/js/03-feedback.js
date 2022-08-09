import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const emailInput = feedBackForm.elements.email;
const messageInput = feedBackForm.elements.message;
const formData = {};
const STORAGE_KEY = 'message';


feedBackForm.addEventListener('input', throttle(onFormInput, 500));
feedBackForm.addEventListener('submit', onFormSubmit);

getLocaleStorageData();
function getLocaleStorageData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(storageData)
    emailInput.value = storageData.email;
    messageInput.value = storageData.message;
  }
}

setformData();
function setformData() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
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
    setformData();
  }
}