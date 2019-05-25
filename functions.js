var prompt = require('prompt');

function Addition() {
    prompt.start();
    prompt.get(['number1', 'number2'], function (err, result) {
        console.log("Sum = "+Number(result.number1) + Number(result.number2));
    });
}
function Subtraction() {
    prompt.start();
    prompt.get(['number1', 'number2'], function (err, result) {
        console.log("Difference = "+Number(result.number1) - Number(result.number2));
    });
}
function Division() {
    prompt.start();
    prompt.get(['number1', 'number2'], function (err, result) {
        console.log("Quotient = "+Number(result.number1) / Number(result.number2));
    });
}
function Multiplication() {
    prompt.start();
    prompt.get(['number1', 'number2'], function (err, result) {
        console.log("Product = "+Number(result.number1) * Number(result.number2));
    });
}
module.exports = {
    Addition,
    Multiplication,
    Subtraction,
    Division
}