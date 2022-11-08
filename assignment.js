let numberClicked = false;
function add(char) {
    if(numberClicked == false) { // 이전에 연산자 입력,
        if(isNaN(char)==true) { // 입력값이 또 연산자이면,
            // 아무 일도 일어나지 않았다.
        } else { // 연산자가 아닐 시
            document.getElementById('display').value += char;
        }
    } else { // 이전에 숫자 입력시 
        document.getElementById('display').value += char;
    }

    if(isNaN(char)==true) {
        numberClicked = false;
    } else {
        numberClicked = true;
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


