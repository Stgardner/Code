// Bronze Medal
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var myArray = []
for(var i = 0; i < fruit.length; i=i+2){
    myArray.push(fruit[i])
}
console.log(myArray) 

//Silver Medal
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  everyOtherName = []
  occupationsOther = []
  for(i=0; i<peopleArray.length; i = i+2) {
      everyOtherName.push(peopleArray[i].name)
      occupationsOther.push(peopleArray[i+1].occupation)
     
  }
  console.log(everyOtherName)
  console.log(occupationsOther)

//Gold Medal
var array = [0, 0, 0]
var twoArray = []
for (i = 0; i < array.length; i++) {
    twoArray.push(array[i]),
    twoArray.push(array[i]),
    twoArray.push(array[i])
    
}
console.log(twoArray)