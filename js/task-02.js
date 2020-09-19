const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsNew = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientsNew);
