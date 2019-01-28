// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var myArray = []
// for(var i = 0; i < fruit.length; i=i+2){
//     myArray.push(fruit[i])
// }
// console.log(myArray) 

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