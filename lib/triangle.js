const Shape = require('./shapes')

class Triangle extends Shape{
    render(){
        return   `<svg height="300" width="600">
  <polygon points="285,40 425,300 150,300" style="fill: ${data.color}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.letterColor}>${data.letters}</text></svg>`
    }

}

module.exports = Triangle