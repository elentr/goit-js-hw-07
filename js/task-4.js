const logForm = document.querySelector(".login-form");

logForm.addEventListener("submit", event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    window.alert("All form fields must be filled in");
    return;
  }

  const userEnter = {
    email,
    password,
  };
  
  console.log(userEnter);
  form.reset();
});