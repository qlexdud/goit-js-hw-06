const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);
const obj = {};

function handleSubmit(event) {
  event.preventDefault();
  obj.login = event.target.elements.email.value;
  obj.password = event.target.elements.password.value;

  if (obj.login === "" || obj.password === "") {
    alert("Please fill in all the fields!");
    return;
     
  }

  console.log(`Login: ${obj.login}, Password: ${obj.password}`);
  event.target.reset();
}
