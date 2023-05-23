const index = require('../index')
function generateData(data){
    
    const letters = renderLetters(data);
    const letterColor = renderLetterColor(data);
    const shape = renderShape(data);
    const shapeColor = renderShapeColor(data);

}

class SVG {
    constructor(letters, letterColor, shape, shapeColor){
        this.letters = letters;
       
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    printMetaData(){
     console.log('*create svg file*')
    }
}

class Logo extends SVG {
    constructor(letters, letterColor){
        super(letters);
        this.letterColor = data.letterColor;


}}

const newLogo = new SVG (
    
)


module.exports = generateData