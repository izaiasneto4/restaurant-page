
const contact = () => {
  const mainForm = document.createElement('main');
  mainForm.classList.add('main-form');
  const form = document.createElement('form');
  mainForm.appendChild(form);

  const nameLabel = document.createElement('label');
  nameLabel.innerHTML = 'Name:';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Ex: John';
  form.appendChild(nameInput);

  const lNameLabel = document.createElement('label');
  lNameLabel.innerHTML = 'Last Name:';
  form.appendChild(lNameLabel);

  const lNameInput = document.createElement('input');
  lNameInput.placeholder = 'Ex: Smith';
  form.appendChild(lNameInput);

  const emailLabel = document.createElement('label');
  emailLabel.innerHTML = 'Email:';
  form.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.placeholder = 'Ex: john@smith.com';
  form.appendChild(emailInput);

  const messageLabel = document.createElement('label');
  messageLabel.innerHTML = 'Your Message:';
  form.appendChild(messageLabel);

  const message = document.createElement('textarea');
  form.appendChild(message);


  const submit = document.createElement('button');
  submit.innerHTML = 'Send Message';
  form.appendChild(submit);

  return mainForm;
};


export default contact;
