const { Triangle, Square, Circle } = require("./shapes.js");





describe('Shape', () => {
    
    describe('Triangle', () => {
      it('should set the color to blue', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);
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