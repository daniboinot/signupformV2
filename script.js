const container = document.querySelector(".container");
const signupButton = document.querySelector(".signup-section header");
const loginButton = document.querySelector(".login-section header");

loginButton.addEventListener("click", () => {
  container.classList.add("active");
});

signupButton.addEventListener("click", () => {
  container.classList.remove("active");
});

// if passwords don't match
const password = document.getElementById("password");
const confpass = document.getElementById("confirm-password");

if (password !== confpass) {
  document.getElementById("confirm-password").style.border = "2px solid red";
} else password === confpass;
{
  document.getElementById("confirm-password").style.border = "2px solid";
}
