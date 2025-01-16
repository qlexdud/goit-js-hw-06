const inputRange = document.querySelector("#font-size-control");
const textChannge =  document.querySelector("#text");
inputRange.addEventListener("change", (event) => {
    textChannge.style.fontSize = event.currentTarget.value + 'px';
});
