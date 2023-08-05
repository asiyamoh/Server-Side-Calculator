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
}



function equal() {
    let number1 = $('#firstNum').val();
    let number2 = $('#secondNum').val();

    bundle = {
        number1: number1,
        number2: number2,
        operation: operation,
    };

    $.ajax({
        method: "POST",
        url: "/calculator",
        data: bundle
    }).then((response) => {
        calculator()
    }).catch((error) => {
        console.log('Error with post', error);
    })
}

function calculator() {
    $.ajax({
        method: "GET",
        url: '/calculator',
    }).then((response) => {
        let currentAnswer = (response[response.length - 1]?.results)
        if (currentAnswer == undefined) {
            currentAnswer = ''
        }
        else {
            renderCurrentAnswer(currentAnswer)
        }
        render(response)

    }).catch((error) => {
        console.log('Error with GET', error)
    })
}



function renderCurrentAnswer(currentAnswer) {
    $('#answer').empty()
    $('#answer').append(`${currentAnswer}`)
}

function render(response) {
    $('#output').empty()
    for (let each of response) {
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


