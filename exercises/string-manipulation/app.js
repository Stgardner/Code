var readlineSync = require('readline-sync');
var userName = readlineSync.question("\n" + 'What is your first name? ');
console.log("\n" + "Thank you!");
var lastName = readlineSync.question("\n" + 'What is your last name? ');
console.log("\n" + "Hi " + userName.toUpperCase() + " " + lastName.toUpperCase() 
+ "!" + "\n"  + "\n" + " Your name is " + (lastName.length + userName.length) + " letters " + "long" + "\n")
var userAnswer = readlineSync.question("What is your favorite food and why? " + "\n")
food()
function food(){
if (userAnswer.length > 20) {
    var indx = userAnswer.length / 2;
    var newUserAnswer = userAnswer.slice(indx);
    console.log("\n" + "This is the second half of your long message" +  " -> " + newUserAnswer + "\n")
} else { 
    console.log(userAnswer)
}
}
var rePrint = readlineSync.question("Now give me a number: ")
if (rePrint > userAnswer.length) {
    var rePrint = readlineSync.question("Give me a number that is " + "less than " + userAnswer.length)
    finalAnswer = userAnswer.slice(rePrint)
} else {
var indx = rePrint
finalAnswer = userAnswer.slice(indx);
}
console.log("\n" + "THis is your message but sliced from the index of the number you gave me " + "-> " + finalAnswer + "\n");
if (readlineSync.keyInYN("Is that cool? : ")) {
    console.log("\n" + "NOICE! I THINK SO TOOOOO" + "\n")
} else { 
    console.log("\n" + "WELL MAKE YOUR OWN DAMN PROGRAM THEN!" + "\n")
}