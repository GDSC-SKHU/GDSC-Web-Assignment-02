//! eval()의 사용법이 조사한 것과 다르게 작동됨
//! window.Function이 BOM에 관한 것 같은데, 본 과제에 어떻게 쓰일 수 있는지 알 수 없음

let num1 = ""; //피연산자1 변수 지정
let num2 = ""; //피연산자2 변수 지정
let operator = ""; //연산자 변수 지정
const display = document.querySelector(".display"); // input.display 객체화
const result = document.querySelector(".result"); // input.result 객체화

//* 피연산자 함수
//? 왜 arrow function이 이중구조(?)로 구성해야 작동되는지 모르겠음..
const onClickNumber = (number) => () => {
  if (result.value) {
    num2 += number;
  } else {
    if (operator) {
      // operator 값이 지정되어 있을 때
      num2 += number;
    } else {
      // operator 값이 지정되지 않았을 때
      num1 += number;
    }
    display.value += number;
  }
};

//* 연산자 함수
const onClickOperator = (op) => () => {
  if (result.value) {
    //1회차 연산 후, 해당 값에 추가 연산을 할 경우
    num1 = result.value;
    num2 = "";
    result.value = "";
    display.value = num1;
    operator = op;
    display.value += op;
  } else {
    //최소 연산 수행 시
    if (num1 && !num2) {
      operator = op;
      display.value += op;
    } else if (!num1) {
      alert("숫자를 먼저 입력하세요.");
    }
  }
};

//* 초기화 함수
const onClickClear = () => () => {
  display.value = "";
  result.value = "";
  num1 = num2 = operator = "";
};

//* 계산 함수
const onClickCalculator = () => () => {
  if(!num2){
    alert("숫자를 먼저 입력하세요.");
  }else{
    if (operator === "+") {
      result.value = parseInt(num1) + parseInt(num2);
      //! eval('num1 + num2');는 문자열 덧셈만 됨
      //! 문자열 식 값을 반환한다고 하는데, 그것이 잘 실행되지 않음
    } else if (operator === "-") {
      result.value = parseInt(num1) - parseInt(num2);
    } else if (operator === "*") {
      result.value = parseInt(num1) * parseInt(num2);
    } else if (operator === "/") {
      result.value = parseInt(num1) / parseInt(num2);
    }
  }
  
};
for(let i=0; i<10; i++){
  document
  .querySelector(".js-number-"+i)
  .addEventListener("click", onClickNumber(i));
};
document
  .querySelector(".js-operator-plus")
  .addEventListener("click", onClickOperator("+"));
document
  .querySelector(".js-operator-minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector(".js-operator-divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector(".js-operator-multi")
  .addEventListener("click", onClickOperator("*"));
document.querySelector(".js-clear").addEventListener("click", onClickClear());
document
  .querySelector(".js-calculate")
  .addEventListener("click", onClickCalculator());
