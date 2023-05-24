const Shape = require('./shapes')

class Square extends Shape{
  render(){
    return  `<svg width="400" height="400">
    <rect width="300" height="300" style="fill:${data.color};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.letterColor}>${data.letters}</text></svg>`
  }

}

module.exports = Square