const Shapes= require('./shapes')
const Triangle= require('./triangle')
const Circle= require('./circle')
const Square= require('./square')



describe('Shape', () => {
    
    describe('Triangle', () => {
      it('should set the color to blue', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="285,40 425,300 150,300" fill="blue" />');
    });
    });

    describe('Circle', () => {
        it('should set the color to red', () => {
          const circle = new Circle();
          circle.setColor("red");
          expect(circle.render()).toEqual('<circle cx="200" cy="200" r="150" fill="blue" />');
      });
      });
   
      describe('Square', () => {
        it('should set the color to purple', () => {
          const square = new Square();
          square.setColor("purple");
          expect(square.render()).toEqual('<rect width="300" height="300" fill="blue" />');
      });
      });







})