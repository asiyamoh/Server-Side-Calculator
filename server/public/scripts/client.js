$(document).ready(handleReady);

let bundle;
let operation;

function handleReady() {
    calculator();
    $('#addition').on('click', operater);
    $('#subtraction').on('click', operater);
    $('#multiplication').on('click', operater);
    $('#division').on('click', operater);
    $('#equal').on('click', equal);
    $('#clear').on('click', onClear)

}

function operater() {
    operation = $(this).text()
    console.log('operation  is:', operation)
}



function equal() {
    let number1 = $('#firstNum').val();
    let number2 = $('#secondNum').val();
    console.log(number1, number2)

    bundle = {
        number1: number1,
        number2: number2,
        operation: operation,
    };
    console.log(bundle);

    $.ajax({
        method: "POST",
        url: "/calculator",
        data: bundle
    }).then((response) => {
        console.log('insde the POST')
        calculator()
    }).catch((error) => {
        console.log('Error with post', error);
        alert('Error with post')
    })
}

function calculator() {
    $.ajax({
        method: "GET",
        url: '/calculator',
    }).then((response) => {
        console.log('insde the get')
        
        let  currentAnswer = response[response.length-1].results
        renderCurrentAnswer(currentAnswer)
        
        render(response)

    }).catch((error) => {
        console.log('Error with GET', error)
        alert('Error with GET')
    })
}



function renderCurrentAnswer(currentAnswer) {
    $('#answer').empty()
    console.log('the cuurent answer is:', currentAnswer);
    if (currentAnswer == undefined) {
        currentAnswer = ''
    }
    else {
        $('#answer').append(`${currentAnswer}`)
    }
}

function render(response) {
    $('#output').empty()
    console.log('insde the render');
    for (let each of response) {
        console.log(each)
        $('#output').append(` 
       <li> ${each.number1} ${each.operation} 
       ${each.number2} = ${each.results}
        </li>`)
    }
}

function onClear() {
    $('#firstNum').val(' ');
    $('#secondNum').val(' ');
    operation = undefined;
}


