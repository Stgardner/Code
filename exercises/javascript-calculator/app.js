var readlineSync = require('readline-sync');
var firstNum = readlineSync.question("\n" + "Give me one number: ")
var secondNum = readlineSync.question("\n" + "Give me another number: ")
readlineSync.setDefaultOptions({limit: ['add', 'sub', 'mul', 'div']});
calc()
function calc() { 
    var operator = readlineSync.question("\n" + 'Would you like to add, sub, mul, or div?: ');
    if (operator === 'add') {
        result = +firstNum + +secondNum
}   else if (operator === 'sub') {
        result = +firstNum - +secondNum
}   else if (operator === 'mul') {
        result = +firstNum * +secondNum
}   else if (operator === 'div') {
        result = +firstNum / +secondNum
}
console.log("\n" + "The Result is " + result + "\n")
}
