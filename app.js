// import * as fs from 'fs';
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();
console.log( argv.base);
                

// const [ , ,arg3 = 'base=5'] = process.argv;
// const[, base = 5] = arg3.split('=');
// // console.log(base);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));