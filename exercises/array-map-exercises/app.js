// function doubleNumbers(arr) {
//     var doubled = arr.map(function(ar) {
//         return ar * 2
//     })
//     console.log(doubled)
// }

// doubleNumbers([2, 5, 100]); // [4, 10, 200]

// function stringItUp(arr){
// console.log(arr.map(String))

// }
// stringItUp([2, 5, 100]); // ["2", "5", "100"]

// function capitalizeNames(arr){
//    var Newish = arr.map(f=>{return f[0].toUpperCase() + f.slice(1).toLowerCase() });
//     console.log(Newish)
//     }

// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// persons = ([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 

// names = persons.map(function(person) {
//     return person.name
// })
// console.log(names)

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// peoplez = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// function makeStrings(arr) {
//     var newArray = arr.map(function(f) {
//         if( f.age > 60) {
//             return f.name + " can go to the matrix."
//         } else {
//             return f.name + "is under age! !"
//         }
//     })
//     return newArray 
// }
// console.log(makeStrings(peoplez))

persons = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 

// function readyToPutInTheDOM(persons){
//     var persones = persons.map(function(person){
//         return `<h1>${person.name}</h1>` + `<h2>${person.age}</h2>`

//     })
// return persones
// }

// console.log(readyToPutInTheDOM(persons))

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
