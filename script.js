const result = document.querySelector('.result');

const clearButton = document.querySelector('.button-clear');
const deleteButton = document.querySelector('.button-delete');

const operations = document.querySelectorAll('.operation');

const equalsButton = document.querySelector('.button-equals');
 
const numbers = document.querySelectorAll('.number');

let firstNumber = 0;
let operator = ''

numbers.forEach(function(item, index) {
    item.addEventListener('click', function(){
        if(result.innerText === '0'){
            result.innerText = ''
        }
        result.innerText += item.innerText;
    });
});

operations.forEach(function(item) {
    item.addEventListener('click', function(){
        if(result.innerText !== ''){
            firstNumber = parseInt(result.innerText);

            operator = item.innerText;
            result.innerText = ''
        }
    });
});

equalsButton.addEventListener('click', function(){
    switch(operator){
        case '+':
            result.innerText = firstNumber + parseInt(result.innerText);
            operator = '';
            break;
        case '-':
            result.innerText = firstNumber - parseInt(result.innerText);
            operator = '';
            break;
        case '×':
            result.innerText = firstNumber * parseInt(result.innerText);
            operator = '';
            break;
        case '÷':
            result.innerText = firstNumber / parseInt(result.innerText);
            operator = '';
            break;
    } 
});

clearButton.addEventListener('click', function(){ 
    result.innerText = '0';
});

deleteButton.addEventListener('click', function(){
    result.innerText = result.innerText.slice(0, -1);
    if(result.innerText === ''){
        result.innerText = '0'
    }
});