$(document).ready(handleReady);

let firstNum = 0;
let secondNum = 0;
let answer = 0;

function handleReady() {
    $('#addition').on('click', addition);
    $('#equal').on('click', handleEqual);
    firstNum = Number[$('#firstNum').val()];
    secondNum =  Number[$('#secondNum').val()];

}


function handleEqual(){
    // firstNum = $('#firstNum').val();
    // secondNum = $('#secondNum').val();
    console.log("the first num is",firstNum);
    console.log("the second num is",secondNum);

}

function addition(){
    answer = firstNum + secondNum;
    console.log('the answer is:', answer);
}

