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