const name = "John"
const age = 101
let pets = ["cat", "dog"]
let petObjects = []

function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        return (pets[i] === "cat") ? name = "fluffy" : name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
   return name


const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }))



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterFor = people.filter(person => !!person.friendly)

const sum =  (a, b) => a + b


// const produceProduce = (a, b) => a * b

// function printString(firstName = "Jane", lastName = "Doe", age = 100) => ``

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 animals.filter(animal => {
         console.log(animal.type === "dog" ? true : false)
         })

function greeting(name, location){
    name = fname
    location = flocation
console.log(`Hi ${fname}!\n Welcome to ${flocation}. \n I hope you enjoy your stay. Please ask
the president of ${flocation} if you need anything.`)
}