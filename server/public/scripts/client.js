$(document).ready(handleReady);

let bundle;

function handleReady() {
    $('#addition').on('click', allBundle);
    $('#subtraction').on('click', allBundle);
    $('#multiplication').on('click', allBundle);
    $('#division').on('click', allBundle);
    $('#equal').on('click', equal);
}


function allBundle(){
    $('#output').empty();
    let firstNum = parseInt($('#firstNum').val());
    let secondNum = parseInt($('#secondNum').val());
    let operation = $(this).text();

      bundle = [
        {
            firstNum:firstNum,
            secondNum:secondNum,
            operation:operation,
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
        calculator()
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
        bundle = response
        allBundle()
    }).catch((error) => {
      console.log('Error with GET', error)
      alert('Error with GET')
    })
  }



