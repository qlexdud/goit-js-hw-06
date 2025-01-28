function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const registerButton = document.querySelector(".change-color");
const elem = document.querySelector(".widget");
const elemColor = document.querySelector(".color");

registerButton.addEventListener("click", handleClick);

function handleClick() {
  elem.style.backgroundColor = getRandomHexColor()
  elemColor.textContent = getRandomHexColor()
}