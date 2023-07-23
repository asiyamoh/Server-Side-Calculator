$(document).ready(handleReady);
let bundle = [];

function handleReady() {
    $('#firstNum').on('click', allBundle);
    $('#secondNum').on('click', allBundle);
    $('#addition').on('click', operationBundle);
    $('#subtraction').on('click', operationBundle);
    $('#multiplication').on('click', operationBundle);
    $('#division').on('click', operationBundle);

}


function allBundle(){
    console.log('in this bitch');
    let firstNum = $('#firstNum').val();
    let secondNum = $('#secondNum').val();

    let bundle = [
        {
            firstNum:firstNum,
            secondNum:secondNum,
            operation:operationBundle()

        }
    ];
    console.log(bundle);
}

function operationBundle(){
    console.log("inside");
    let addition = $('#addition').text();
    let subtraction =  $('#subtraction').text();
    let multiplication = $('#multiplication').text();
    let division = $('#division').text();
    let operation = {
        addition:addition,
        subtraction:subtraction,
        multiplication:multiplication,
        division:division
    };
    return operation;

};
