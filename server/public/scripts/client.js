$(document).ready(handleReady);

let bundle;

function handleReady() {
    $('#firstNum').on('click', allBundle);
    $('#secondNum').on('click', allBundle);
    $('#addition').on('click', operationBundle);
    $('#subtraction').on('click', operationBundle);
    $('#multiplication').on('click', operationBundle);
    $('#division').on('click', operationBundle);
    $('#equal').on('click', equal);
}


function allBundle(){
    $('#output').empty();
    let firstNum = $('#firstNum').val();
    let secondNum = $('#secondNum').val();
    let operation = operationBundle();

      bundle = [
        {
            firstNum:firstNum,
            secondNum:secondNum,
            operation:operation

        }
    ];
    // console.log(bundle);
}

let equal = () => {
    $.ajax({
        method: "POST",
        url: "/addcalculator",
        data: bundle
    }).then((response) => {
        allBundle()
    }).catch((error) => {
        console.log('Error with post', error);
        alert('Error with post')
    })
}

let calculator = () => {
    $.ajax({
      method: "GET",
      url: '/calculator',
    }).then((response) => {
        console.log('inside get', response);
        bundle = response
        equal()
    }).catch((error) => {
      console.log('Error with GET', error)
      alert('Error with GET')
    })
  }

function operationBundle(){
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


