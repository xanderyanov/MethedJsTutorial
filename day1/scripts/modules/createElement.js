const createElement = (tag, attribute) => {
  const element = document.createElement(tag);
  Object.assign(element, attribute); //соединяем

  return element
}

export default createElement;