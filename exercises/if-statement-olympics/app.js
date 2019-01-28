//Preliminares
if (5 > 3) {
    console.log('is greater than')
}
if ("cat".length === 3){
    console.log('is the length')
}
if ("cat" === "dog") {
    console.log("not the same")
}

//Bronze Medal
var person = {
    name: "Bobby",
    age: 12
  }
if (person.age >= 18 && person.name.startsWith("B")){
    console.log(person.name + " is allowed to go to the movies")
}
else {
    console.log(person.name + " is not allowed to go to the movies" )
}

//Silver Medal
if (1 === "1") {
    console.log('strict')
} else if (1 == "1") {
    console.log('loose')
} else {
    console.log('not equal at all')
}
if (1 <= 2 || 2 == 4) {
    console.log('yes')
}

//Gold Medal
if(typeof "dog" === 'string') {
    console.log('string')
}
if(typeof "true" === 'boolean') {
    console.log('boolean')
}
var num = 72
if(typeof num !== 'undefined') {
    console.log('defined')
}
if("s" > 12) {
    console.log("probably not")
}
var myNum = 10
myNum % 2 === 0 ? console.log('even') : console.log('odd')

var myNum = 11
myNum % 2 === 0 ? console.log('even') : console.log('odd')