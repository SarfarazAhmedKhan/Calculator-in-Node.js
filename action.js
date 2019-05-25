const clear=require('clear');
const figlet=require('figlet');
const chalk = require('chalk');

function Figlet(value){
    console.log(figlet.textSync(value))
}

module.exports={
    Figlet
}