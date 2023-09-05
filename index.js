import chalk from 'chalk';
import randomHex from 'random-hex';

randomHex.generate();

const randomColor = randomHex.generate();

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
