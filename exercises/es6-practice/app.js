const name = "John"
const age = 101
let pets = ["cat", "dog"]
let petObjects = []

function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            let name = "fluffy"
        } else {
            let name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

runForLoop()

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


const produceProduce = (a, b) => a * b

function printString(firstName = "Jane", lastName = "Doe", age = 100) => ({""})