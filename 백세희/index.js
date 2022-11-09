const display = document.querySelector(".js-display");
const result = document.querySelector(".js-result");

function add(char) {
  display.value += char;
}

function calculate() {
  const RESULT = eval(display.value);
  document.querySelector(".js-result").value = RESULT;
}

function reset() {
  display.value = "";
  result.value = "";
}
