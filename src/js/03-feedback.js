import throttle from 'lodash.throttle';

const feedBackFormRef = document.querySelector('.feedback-form');
const emailRef = feedBackFormRef.elements.email;
const messageRef = feedBackFormRef.elements.message;
const formData = {};
const KEYMSG = '"message';

feedBackFormRef.addEventListener('input', throttle(onFormInput, 500));

feedBackFormRef.addEventListener('submit', onFormSubmit);

getLocaleStorageData();

setformData();

function getLocaleStorageData() {
  if (localStorage.getItem(KEYMSG)) {
    const storageData = JSON.parse(localStorage.getItem(KEYMSG));
    emailRef.value = storageData.email;
    messageRef.value = storageData.message;
  }
}

function setformData() {
  formData.email = emailRef.value;
  formData.message = messageRef.value;
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEYMSG, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(KEYMSG);
    setformData();
  }
}