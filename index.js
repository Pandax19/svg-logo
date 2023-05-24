const inquirer = require("inquirer");
const shapes = require('./lib/shapes')
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')
const fs = require('fs');


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
      err ? console.error(err) : console.log('Generated SVG Logo!'))
}






function init(){

  inquirer
   .prompt(questions)
   .then((response) => {
     function generateData (response){
      if(response.shape === 'triangle'){
        const file = Triangle.render()
        return file
      } else if(response.shape === 'square') {
          const file = Square.render()
          return file
      } else {
          const file = Circle.render()
          return file

      }
     }
      generateData(response);

      const fileName = "logo.svg"
     writeToFile(fileName, file)
    })
}

init();