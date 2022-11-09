const display = document.querySelector('.js-display');
const result = document.querySelector('.js-result');

// input에 클릭하면 해당 숫자, 문자 넣어주기
function add(char) {
    display.value = display.value + char;
}

// eval로 입력된 값 자동 계산
function calculate() {
    const results = eval(display.value);
    result.value = results;
}

// value에 값 안 넣어서 reset
function reset() {
    display.value = "";
    result.value = "";
}