const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => {
  test('render should generate correct shape and color', () => {
    const shape = new Triangle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple"/>`);
  });
});
describe('Circle', () => {
  test('render should generate correct shape and color', () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="purple"/>`);
  });
});
describe('Square', () => {
  test('render should generate correct shape and color', () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(`<rect x="80" y="50" width="300" height="300" fill="purple"/>`);
  });
});