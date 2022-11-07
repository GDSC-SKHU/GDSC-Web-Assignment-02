const OperArray = [];
/*
연산자 담을 배열
*/
const FindAllOper = document.querySelectorAll('.TypeIsOper');
FindAllOper.forEach((EachOper) => {
  OperArray.push(EachOper);
});
/*
식을 저장할 공간
*/

const FindAllItem = document.querySelectorAll('.item:not(.TypeIsOper)');
FindAllItem.forEach((EachItem) => {
  EachItem.addEventListener('click', () => {
    /*
    식을 저장할 공간에 덧붙여짐
    */
    FindAllItem[0].innerHTML += EachItem.innerHTML;
  });
});

/*
Operator객체의 첫번쨰로는, 연산자만 , 두번쨰로는 모든 요소 전달
*/
const Operator = { OperArray, FindAllItem };
export { Operator };
