import { suma, multiplicar } from './controller.js'
import chalk from 'chalk';


const sum = suma(1, 2)
console.log (sum)

const multi = multiplicar(4, 5)
console.log(chalk.green(multi))