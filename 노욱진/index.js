const buttons = document.querySelectorAll("button");
const displayFormula = document.querySelector(".js-cal-display-formula");
const display = document.querySelector(".js-cal-display");

const resultButton = document.querySelector(".js-result");
const resetButton = document.querySelector(".js-reset");

const INIT_NUM = "0";

const resultNumber = () => {
  return (display.innerHTML = eval(display.innerHTML));
};

const resetNumber = () => {
  return (display.innerHTML = INIT_NUM), (displayFormula.innerHTML = INIT_NUM);
};

const init = () => {
  buttons.forEach((value) => {
    value.addEventListener("click", (event) => {
      const { target } = event;
      const { value } = target;

      if (displayFormula.innerHTML && display.innerHTML === INIT_NUM) {
        (displayFormula.innerHTML = value), (display.innerHTML = value);
      } else {
        (displayFormula.innerHTML += value), (display.innerHTML += value);
      }

      resultButton.addEventListener("click", resultNumber);
      resetButton.addEventListener("click", resetNumber);
    });
  });
};

init();
