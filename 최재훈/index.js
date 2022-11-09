// 결과 값
const resultDisplay = document.querySelector(".js-result");

// 내가 입력하는 값
const inputDisplay = document.querySelector(".js-input");

// AC, Del, = 제외 버튼 클릭 시 inputDisplay에 보여주기 위함
function add(char) {
  inputDisplay.value += char;
}

// "=" 클릭 시 계산 하는 기능
function equal() {
  const result = eval(inputDisplay.value);
  resultDisplay.value = result;
}

// AC버튼 클릭 시 reset() 함수 실행
function reset() {
  resultDisplay.value = "";
  inputDisplay.value = "";
}

// del 버튼 클릭 시 del() 함수 실행 slice 사용
function del(char) {
  inputDisplay.value = inputDisplay.value.slice(0, -1);
}
