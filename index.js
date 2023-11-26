const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function generateLogo() {
  inquirer
    .prompt([

      {
        type: "input",
        name: "text",
        message: "Enter 3 characters to display in your SVG logo",
      },
      {
        type: "input",
        name: "TextColor",
        message: "Enter Color keyword or hexadecimal number",
      },
      {
        type: "input",
        name: "ShapeColor",
        message: "Enter shape color keyword or hexadecimal number",
      },
      {
        type: "list",
        name: "image",
        message: "Choose shape you like",
        choice: ["Circle", "Square", "Triangle"],
      }
    ])
    .then((response) => {
      if (response.text.length > 3) {
        console.log('text cannot be more than 3 chars');
        generateLogo();
      } else {
        writeToFile('logo.svg', response);
      }
    });
}


const util = require('util');
const writeFile = util.promisify(fs.writeFile);

function writeToFile(fileName, responses) {
  let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += '<g>';

  let shapeChoice;
  switch (responses.image) {
    case 'Circle':
      shapeChoice = new Circle();
      break;
    case 'Square':
      shapeChoice = new Square();
      break;
    case 'Triangle':
      shapeChoice = new Triangle();
      break;
    default:
      throw new Error('Invalid shape choice');
  }

  shapeChoice.setColor(responses.ShapeColor);

  svgString += shapeChoice.render();
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responses.TextColor}">${responses.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  try {
    fs.writeFile(fileName, svgString)
      .then(() => {
        console.log("Generated logo.svg");
      })
  } catch (err) {
    console.log(err);
  };
}

generateLogo();
