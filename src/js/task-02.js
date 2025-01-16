const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*const list = document.querySelector("#ingredients");

ingredients.forEach((value) => {
  const elem = document.createElement("li");
  elem.textContent = value;
  elem.classList.add("item");
  list.append(elem);

});*/

const list = document.querySelector("#ingredients");
let elem = [];

ingredients.forEach((value, i) => {
  elem[i] = document.createElement("li");
  elem[i].textContent = value;
  elem[i].classList.add("item");
  

});
//list.append(elem[0], elem[1], elem[2], elem[3], elem[4], elem[5]);
list.append(...elem);
console.log(list);