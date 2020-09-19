const itemEl = document.querySelectorAll('.item');

const categories = `'В списке ${itemEl.length} категории.'`;
console.log(categories);
const category = array => {
  array.forEach(element => {
    const title = element.querySelector('h2');

    const itemEl = element.querySelectorAll('li');

    const message = `Категория: ${title.textContent}. Количество элементов: ${itemEl.length}.`;
    console.log(message);
  });
};
category(itemEl);
