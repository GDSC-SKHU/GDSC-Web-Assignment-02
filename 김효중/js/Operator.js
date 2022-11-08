/*
=를 갖는 dom요소
*/
const FindEqualItem = document.querySelector('.item.OperCalculate');
/*
수식을 저장할 거임
*/
const StoreExpress = document.querySelector('.item.StoreExpresstion');
/* 
=가 아닌 item 전부 찾아서 클릭하면 문자열 덧붙임
*/
const FindAllItem = document.querySelectorAll('.item:not(.OperCalculate)');
FindAllItem.forEach((EachItem) => {
  EachItem.addEventListener('click', () => {
    FindAllItem[0].innerHTML += EachItem.innerHTML;
  });
});
/*
AC->누르면 둘 다 초기화 해줌
*/
const Init = document.querySelector('.item.OperInit');
Init.addEventListener('click', () => {
  FindAllItem[0].innerHTML = '';
  StoreExpress.innerHTML = '';
});

/*
eval의 결과값과 수식 저장
*/
FindEqualItem.addEventListener('click', () => {
  const Result = eval(FindAllItem[0].innerHTML);
  StoreExpress.innerHTML = '수식:' + FindAllItem[0].innerHTML;
  FindAllItem[0].innerHTML = '결과:' + Result;
});
