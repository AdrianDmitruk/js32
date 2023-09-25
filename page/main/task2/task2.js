const dataForm = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const localName = localStorage.getItem("name");
const localEmail = localStorage.getItem("email");

if (localName) {
  nameInput.value = localName;
}

if (localEmail) {
  emailInput.value = localEmail;
}

dataForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
});
