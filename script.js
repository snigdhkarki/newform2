const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

form.addEventListener("submit", function(event) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    alert("Password and Confirm Password fields do not match");
  }
});