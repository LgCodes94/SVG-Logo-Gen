// const inquirer = require('inquirer');

// async function getUserInput() {
//   const answer = await inquirer.prompt({
//     type: 'input',
//     name: 'text',
//     message: 'Enter up to three characters for the text:',
//     validate: (input) => input.length > 0 && input.length <= 3,
//   });

//   return answer.text;
// }

// async function getUserColor(prompt) {
//   const answer = await inquirer.prompt({
//     type: 'input',
//     name: 'color',
//     message: `Enter ${prompt} color (name or hex):`,
//   });

//   return answer.color;
// }

// async function getUserShape() {
//   const answer = await inquirer.prompt({
//     type: 'list',
//     name: 'shape',
//     message: 'Choose a shape:',
//     choices: ['circle', 'triangle', 'square'],
//   });

//   return answer.shape;
// }
// module.exports = { getUserInput, getUserColor, getUserShape };