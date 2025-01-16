var counterValue = 0;
const buttonDecr = document.querySelector("[data-action='decrement']");
const buttonIncr = document.querySelector("[data-action='increment']");

const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
};

buttonIncr.addEventListener("click", increment);
buttonDecr.addEventListener("click", decrement);

