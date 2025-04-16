const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const sayHello = () => {
  const inputValue = textInput.value.trim();
  if (inputValue === '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = inputValue;
  }  
};

textInput.addEventListener('input', sayHello);