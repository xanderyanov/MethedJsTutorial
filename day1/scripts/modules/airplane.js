import createElement from "./createElement.js";

const creatCockpit = (titleText) => {
  const cockpit = createElement('div', {
    className: 'cockpit',
  });
  const title = createElement('h1',{
    className: 'cockpit-title',
    textContent: titleText,
  });

  const button = createElement('button', {
    className: 'cockpit-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  cockpit.append(title, button);

  return cockpit;
};

const createAirplane = (title, scheme) => {
  const choisesSeat = createElement('form', {
    className: 'choises-seat',
  });

  const plane = createElement('fieldset',{
    className: 'plane',
    name: 'plane',
  });

  const cockpit = creatCockpit(title);
};

const airplane = (main, data) =>{
  const title = 'Выберите места';
  const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];


  main.append(createAirplane(title, scheme));
};

export default airplane;