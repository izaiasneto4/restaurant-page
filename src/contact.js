const contact = `
<main class="main-form">
  <form>
    <label for="name">Name: </label>
    <input type="text" placeholder="Ex: John" name="name">
    <label for="name">Last Name: </label>
    <input type="text" placeholder="Ex: Smith" name="last-name">
    <label for="name">Email: </label>
    <input type="email" placeholder="Ex: john@smith.com" name="email">
    <label for="message">Your message:</label>
    <textarea name="message" id="" cols="30" rows="10"></textarea>
    <input type="submit" >
  </form>
</main>
`;

const contact = () => {
  const mainForm = document.createElement('main').classList.add('main-form');
  const form = document.createElement('form');
  const nameLabel = document.createElement('label').setAttribute('for', 'name');
  const nameInput = document.createElement('input').setAttribute('type', 'text').setAttribute('name', 'name');
  const lNameLabel = document.createElement('label').setAttribute('for', 'last-name');
  const lNameInput = document.createElement('input').setAttribute('type', 'text').setAttribute('name', 'last-name');
  const emailLabel = document.createElement('label').setAttribute('for', 'email');
  const emailInput = document.createElement('input').setAttribute('name', 'email');
  const messageLabel = document.createElement('label').setAttribute('for', 'message');
  const message = document.createElement('textarea').setAttribute('cols', 30).setAttribute('rows', 10).setAttribute('name', 'message');
  const submit = document.createElement('input').setAttribute('type', 'submit');

  mainForm.appendChild(form);

  return mainForm;
}


export default contact;
