const btns = document.querySelectorAll('.js-btn');
const inputString = document.querySelector('.js-input-string');
const result = document.querySelector('.js-result');
const btnAc = document.querySelector('.js-btn-ac');
const btnResult = document.querySelector('.js-btn-result');
const btnDe = document.querySelectorAll('.js-btn-de');
const WARRING_MSG = '비활성화 된 버튼입니다.';

// * 세터 게터 구현 및 함수 분할 예정

const btnClickHandler = (e) => {
    const { target } = e;
    if (inputString.innerHTML === '0') {
        inputString.innerHTML = '';
        inputString.innerHTML += target.innerHTML;
        console.log(target);
    } else {
        inputString.innerHTML += target.innerHTML;
        console.log(target);
    }
};

const resultbtnClickHandler = () => {
    inputString.innerHTML = eval(inputString.innerHTML);
    result.innerHTML = eval(inputString.innerHTML);
};

const acBtnClickHandler = () => {
    inputString.innerHTML = '0';
    result.innerHTML = '0';
};

const warring = () => {
    alert(WARRING_MSG);
};

const init = () => {
    btns.forEach((btn) => {
        btn.addEventListener('click', btnClickHandler);
    });
    btnDe.forEach((btn) => {
        btn.addEventListener('click', warring);
    });
    btnAc.addEventListener('click', acBtnClickHandler);
    btnResult.addEventListener('click', resultbtnClickHandler);
};

init();
