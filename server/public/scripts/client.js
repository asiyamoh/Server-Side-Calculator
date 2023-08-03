$(document).ready(handleReady);

let bundle;
let operation;

function handleReady() {
    $('#addition').on('click', operater);
    $('#subtraction').on('click', operater);
    $('#multiplication').on('click', operater);
    $('#division').on('click', operater);
    $('#equal').on('click', equal);
    calculator();

}

function operater(){
    operation = $(this).text()
    console.log('operation  is:', operation)
}



let equal = () => {
    let number1 = parseInt($('#firstNum').val());
    let number2 = parseInt($('#secondNum').val());
    console.log()

      bundle = [
        {
            number1,
            number2,
            operation
        }
    ];

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

let calculator = () => {
    $.ajax({
      method: "GET",
      url: '/calculator',
    }).then((response) => {
        console.log('insde the get')
        render(response)
    }).catch((error) => {
      console.log('Error with GET', error)
      alert('Error with GET')
    })
  }

  function render(response){
    $('#output').empty()
    console.log('insde the render');
    for(let each of response){
        $('#output').append(` 
       <li> ${each.number1} ${each.operation} 
       ${each.number2} = ${each.result}
        </li>`)
    }
  }


