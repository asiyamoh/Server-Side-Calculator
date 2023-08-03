const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


let bundle = [];
// GET & POST Routes go here
app.get('/calculator', (req, res) => {
  console.log('inside GET of calculator')
  res.send(bundle)
})

app.post('/calculator', (req, res) => {
  let number1 = Number(req.body.number1)
  let number2 = Number(req.body.number2)
  let operation = req.body.operation
  
  let results = calc(number1, number2, operation)

  let newBundle = {
    number1,
    number2,
    operation,
    results
  }

  bundle.push(newBundle);
  res.sendStatus(200);
})

function calc(number1, number2, operation) {
  switch (operation) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    case '/':
      return number1 / number2
    default:
      return 0;
  }
}


app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})