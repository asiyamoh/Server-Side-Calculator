$(document).ready(handleReady);

let firstNum;
let secondNum;

function handleReady() {
    $('#equal').on('click', handleEqual);

}


function handleEqual(){
    firstNum = $('#firstNum').val();
    secondNum = $('#secondNum').val();
}
console.log("the first num is",firstNum);
console.log("the first num is",secondNum);