import chalk from 'chalk';
import randomHex from 'random-hex';

randomHex.generate();

const randomColor = randomHex.generate();
const hue = [
  'red',
  'blue',
  'yellow',
  'green',
  'purple',
  'brown',
  'grey',
  'black',
  'white',
  'pink',
];
const luminosity = ['light', 'dark'];

console.log(randomColor);

console.log(chalk.hex(randomColor)('###############################'));
console.log(chalk.hex(randomColor)('###############################'));
console.log(chalk.hex(randomColor)('###############################'));
console.log(chalk.hex(randomColor)('#####                     #####'));
console.log(chalk.hex(randomColor)(`#####      ${randomColor}        #####`));
console.log(chalk.hex(randomColor)('#####                     #####'));
console.log(chalk.hex(randomColor)('###############################'));
console.log(chalk.hex(randomColor)('###############################'));
console.log(chalk.hex(randomColor)('###############################'));
