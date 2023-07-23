const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let bundle =[
  {
    firstNum:1,
    secondNum:2,
    operation:'+'
  }
];


// GET & POST Routes go here
app.get('/calculator', (req, res) => {
    console.log('inside GET of calculator')
    res.send(bundle);
  })
  
  app.post('/addcalculator',(req,res) => {
    let addcalculator = req.body;
    bundle.push(addcalculator);
    console.log(bundle);
    for(let each of bundle){
      let answer  = each.firstNum + (each.operation) + each.secondNum;
      console.log(answer);
    }
    // console.log(bundle.firstNum);
    // console.log(bundle.secondNum);
    // console.log(bundle.operation);

    res.sendStatus(201);
  })






app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })