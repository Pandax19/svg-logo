const Shape = require('./shapes')


class Circle extends Shape{
    constructor(letters, letterColor, shape, shapeColor){
      
    }
    render(){
      return  `<svg height="400" width="400">
  <circle cx="200" cy="200" r="150" stroke="black" stroke-width="3" fill="${data.color}" />
  <text x="200" y="200" font-size="60" text-anchor="middle" fill=${data.letterColor}>${data.letters}</text></svg>`
  
    }


}

module.exports = Circle