const display = document.querySelector('.js-display')
const output = document.querySelector('.js-output')

function add(char){
    display.value = display.value+char
}

function calculator(){
    const total = eval(display.value);
    output.value = total;
}

function reset(){
    display.value ="";
    output.value="";
}