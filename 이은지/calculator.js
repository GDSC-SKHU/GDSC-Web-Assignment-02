// input에 클릭하면 해당 숫자, 문자 넣어주기
function add(char) {
    const display = document.getElementById('js-display');
    display.value = display.value + char;
}
//! querySelector로 하면 add는 실행되는데 calculate는 실행 안 됨

// eval로 입력된 값 자동 계산
function calculate() {
    const display = document.getElementById('js-display');
    const result = eval(display.value);
    document.getElementById('js-result').value = result;
}

// value에 값 안 넣어서 reset
function reset() {
    document.getElementById('js-display').value = "";
    document.getElementById('js-result').value = "";
}