import createElement from "./createElement.js";

const createTitile = (title) => {
  const h1 = createElement('h1', {
    className: 'title',
    textContent: title
  });

  return h1
}

const createMain = () => {
  const main = createElement('main', {
    className: 'person-data',
  });

  return main;
}

const createFirstForm = () =>{
  const form = createElement('form', {
    className: 'field',
  });

  const label = createElement('label', {
    className: 'field__label',
    textContent: 'Укажите количество человек (max: 6)',
    htmlFor: `count`,
  });

  const input = createElement('input', {
    className: 'field__input',
    id: 'count',
    name: 'count',
    type: 'number',
    placeholder: '#',
    min: '1',
    max: '6',
    required: true,
  });

  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  form.append(label, input, button);

  return form;
}

const start = (app, title) => {
  const h1 = createTitile(title);
  const main = createMain();
  const firstForm = createFirstForm();

  main.append(firstForm);

  app.append(h1, main);

  return {
    main, firstForm
  }
};

export default start;