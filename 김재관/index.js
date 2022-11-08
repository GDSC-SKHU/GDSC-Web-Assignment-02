const btns = document.querySelectorAll('.js-btn');
const inputString = document.querySelector('.js-input-string');
const result = document.querySelector('.js-result');
const btnAc = document.querySelector('.js-btn-ac');
const btnResult = document.querySelector('.js-btn-result');
const btnDe = document.querySelectorAll('.js-btn-de');

// * 세터 게터 구현 및 함수 분할 예정

const init = () => {
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (inputString.innerHTML === '0') {
                inputString.innerHTML = '';
                inputString.innerHTML += btn.innerHTML;
            } else {
                inputString.innerHTML += btn.innerHTML;
            }
        });
    });
    btnAc.addEventListener('click', () => {
        inputString.innerHTML = '0';
        result.innerHTML = '0';
    });
    btnResult.addEventListener('click', () => {
        inputString.innerHTML = eval(inputString.innerHTML);
        result.innerHTML = eval(inputString.innerHTML);
    });
    btnDe.forEach((btn) => {
        btn.addEventListener('click', warring);
    });
};

const warring = () => {
    alert('비활성화 된 버튼입니다.');
};

init();
