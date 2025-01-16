const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);
const obj = {};

function handleSubmit(event) {
    event.preventDefault();
    obj.login = event.target.elements.email.value;
    obj.password = event.target.elements.password.value;

  if (obj.login === "" || obj.password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${obj.login}, Password: ${obj.password}`);
  event.target.reset();
}
