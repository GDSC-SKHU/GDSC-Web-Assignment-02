let numberClicked = false;
function add(char) {
    if(numberClicked == false) { // 이전에 연산자 입력,
        if(isNaN(char)==true) { // 입력값이 또 연산자이면,
            // 아무 일도 일어나지 않기.
        } else { // 연산자가 아닐 시
            document.getElementById('display').value += char; // 값 추가
        }
    } else { // 이전에 숫자 입력시 
        document.getElementById('display').value += char; // 값 추가
    }

    if(isNaN(char)==true) { // 연산자를 눌렀다면
        numberClicked = false; //false로 설정
    } else {
        numberClicked = true; //true로 설정
    }
}

function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}


