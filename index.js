const inquirer = require("inquirer");
const generateData = require('../svg-logo/lib/shapes');
const fs = require('fs');
console.log(inquirer)

const questions = [
  {
    type: 'input',
    message:'Please enter three characters',
    name: 'letters'
  },{
    type: 'input',
    message: 'Please choose a color for your characters',
    name: 'letterColor'
  },{
    type: 'list',
    message: 'Please select a shape',
    name: 'shape',
    choices: [
      {
        name: 'Circle',
        value: 'circle'
      },{
        name: 'Triangle',
        value: 'triangle'
      },{
        name:'Square',
        value:'square'
      }
    ]
  },{
    type:'input',
    message:'Please select a color for your shape',
    name:'shapeColor'
  }
]

function writeToFile(fileName, data){
  fs.writeLogo(fileName, data, (err) => 
      err ? console.error(err) : console.log('Success!'))
}


function init(){

  inquirer
   .prompt(questions)
   .then((response) => {
     const file = generateData(response)
      const fileName = "logo.svg"
     writeToFile(fileName, file)
    })
}

init();