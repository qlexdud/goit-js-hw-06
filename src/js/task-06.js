const removeFocus_Input = document.querySelector("#validation-input");
let numberSymbol;
removeFocus_Input.addEventListener("input", (event) => {
    numberSymbol = event.currentTarget.value.length;
});
removeFocus_Input.addEventListener("blur", () => {
  if (numberSymbol > Number(removeFocus_Input.getAttribute("data-length"))) {
    removeFocus_Input.className = "invalid"
  }
  else{removeFocus_Input.className = "valid"
  }

});

const borCcolor = document.getElementById('validation-input');
removeFocus_Input.style.borderColor = borCcolor.invalid;
