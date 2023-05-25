const { Triangle, Square, Circle } = require("./shapes.js");





describe('Shape', () => {
    
    describe('Triangle', () => {
      it('should set the color to blue', () => {
        const triangle = new Triangle();
        triangle.setColor("green");
        expect(triangle.render()).toEqual( `<polygon points="150, 18 244, 182 56, 182" fill=\"green" />`);
    });
    });

    describe('Circle', () => {
        it('should set the color to red', () => {
          const circle = new Circle();
          circle.setColor("red");
          expect(circle.render()).toEqual(`<circle cx="150" cy="115" r="80"`);
      });
      });
   
      describe('Square', () => {
        it('should set the color to purple', () => {
          const square = new Square();
          square.setColor("purple");
          expect(square.render()).toEqual(`<rect x="73" y="40" width="160" height="160" `);
      });
      });







})