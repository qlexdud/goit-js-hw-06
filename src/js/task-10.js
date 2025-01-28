function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const list = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector("input");

let elem = [];
let valueNumber,valueNumberCreate;
createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);

function handleCreate() {
  valueNumberCreate = valueNumber;
  for (let i = 0; i < valueNumber; i++) {
    elem[i] = document.createElement("div");
    elem[i].style.backgroundColor = getRandomHexColor();
    elem[i].style.width = 30+i*10+"px";
    elem[i].style.height = 30+i*10+"px";
  }
  list.append(...elem);
  console.log(list);
}
function handleDestroy() {
  for (let i = valueNumberCreate-1; i >=0 ; i--) {
    list.childNodes[i].remove();
  }
  console.log(list);
}
inputNumber.addEventListener("input", (event) => {
  valueNumber = event.currentTarget.value;
});


