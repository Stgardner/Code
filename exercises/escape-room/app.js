var readlineSync = require("readline-sync");
var name = readlineSync.question("\n" + "What is your name? ");
if (name) {
 game()
}
function game() { 
console.log("\n" + "Welcome to the escape room " + name + "\n");
console.log("You are in a dark room and you have three options before you." + "\n")
if (readlineSync.keyInYN("Are you ready?")) {
    console.log("here we go!" + "\n")
} else {
    console.log("\n" + "Too bad you're trapped!" + "\n")
}
realGame()
function realGame() {
options = ['Put hand in hole', 'Find the key', 'Open the door']
index = readlineSync.keyInSelect(options, "what is your choice?")
if (options[index] === 'Put hand in hole') {
    console.log("\n" + "You have died" + "\n")
    if (readlineSync.keyInYN("would you like to restart")) {
        realGame()
    } else {
        console.log("\n" + "The End")
    }
}
   else if (options[index] === 'Find the key') {
        console.log("\n" + "Congratulations you have found the key!")
        gamewithKey()
   } else if (options[index] === 'Open the door' ) {
       console.log("\n" + "THE DOOR IS LOCKED")
       realGame()
   }
}
function gamewithKey() {
    options = ['Put hand in hole', 'Open the door']
    index = readlineSync.keyInSelect(options, "what is your choice?")
    if (options[index] === 'Open the door' ) {
        console.log("\n" + "You have unlocked the door and escaped!" + "\n" + "\n" + "Enjoy your freedom" + "\n")
    } else if (options[index] === 'Put hand in hole') {
        console.log("\n" + "You have died" + "\n")
        if (readlineSync.keyInYN("would you like to restart")) {
            game()
        } else {
            console.log("\n" + "The End")
        }
    }
}
}
