const getNotes = require('./notes');
//const validator = require('validator');
const chalk = require('chalk');

const msg = getNotes();
console.log(msg);
// console.log(validator.isURL('https://mead.io'));
console.log(chalk.green('success!'));









// const add = require('./utils.js');

// const res = add(1,2);

// console.log(res);

