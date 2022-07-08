import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const dataUser = {};
const email = form.elements.email;
const message = form.elements.message;
form.addEventListener('input', throttle(dataForm, 500));
form.addEventListener('submit', submitForm);
updateForm();

function dataForm(event) {
  if (event.target.name === 'email') {
    dataUser.email = event.target.value;
  }
  if (event.target.name === 'message') {
    dataUser.message = event.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(dataUser));
}

function submitForm(event) {
  event.preventDefault();
  if (
    dataUser.email !== '' &&
    dataUser.email !== undefined &&
    dataUser.message !== '' &&
    dataUser.message !== undefined
  ) {
    console.log(dataUser);
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    return;
  }
  if (
    (dataUser.email === '' || dataUser.email === undefined) &&
    (dataUser.message === '' || dataUser.message === undefined)
  ) {
    alert('Ви не ввели ваші дані');
    return;
  }
  alert('Ви ввели не всі дані');
}

function updateForm() {
  const user = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (user) {
    email.value = user.email ? user.email : '';
    message.value = user.message ? user.message : '';
    dataUser.email = user.email;
    dataUser.message = user.message;
  }
}
