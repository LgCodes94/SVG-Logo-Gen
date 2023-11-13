const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { getUserInput, getUserColor, getUserShape } = require('./lib/userInput');

async function generateLogo() {
  const text = await getUserText();
  const textColor = await getUserColor('text');
  const shapeType = await getUserShape();
  const shapeColor = await getUserColor(`${shapeType} shape`);

  let shape;
  switch (userInput.shape) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape');
      return;
  }

  shape.setColor(userInput.shapeColor);
  const svgContent = `<svg width="300" height="200">${shape.render()}</svg>`;
  const filename = 'logo.svg';

  fs.writeFileSync(filename, svgContent);
  console.log('Generated logo.svg');
}

generateLogo();
