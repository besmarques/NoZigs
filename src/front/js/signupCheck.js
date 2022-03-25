function checkPassword() {
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let message = document.getElementById("message");

  console.log(password, confirm_password);

  if (password.length != 0) {
    if (password == confirm_password) {
      message.innerHTML = "Passwords Match";
    } else {
      message.textContent = "Passwords Don't Match";
    }
  } else {
    message.textContent = "Please create your password.";
  }
}
