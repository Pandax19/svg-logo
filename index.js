const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require('./lib/shapes');
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
    choices: ["Triangle", "Square", "Circle"],
  
  },{
    type:'input',
    message:'Please select a color for your shape',
    name:'shapeColor'
  }
]

function writeToFile(fileName, data){

  // fs.writeLogo(fileName, data, (err) => 
  //     err ? console.error(err) : console.log('Generated SVG Logo!'))
    let svgString = ''
    svgString += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>'
    svgString += `${data.shape}`
    
      let shapeChoice; 
      if(data.shape === 'Triangle'){
       shapeChoice = new Triangle()
       svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;


      } else if(data.shape === 'Square') {
        shapeChoice = new Square()
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}"/>`;

      } else {
       shapeChoice = new Circle()
       svgString += `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}"/>`;


      }

      svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.letterColor}">${data.letters}</text>`;


      svgString += "</g>";
    svgString += "</svg>";
    
  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log('generate Logo')
  })

  
}



function init(){

  inquirer
   .prompt(questions)
   .then((response) => {
    if (response.letters.length > 3 ) {
      console.log('toomanyletters')
    } else {
      writeToFile('logo.svg', response)
      
    }
   
    })
}

init();