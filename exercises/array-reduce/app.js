// 1) Turn an array of numbers into a total of all the numbers
var total = ([1,2,3]) // 6
var sum = total.reduce(function(a, b) { return a + b; }, 0);
console.log(sum)
 

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
   var sum = arr.reduce(function(a,b) {
       return String(a) + String(b);
    },)
    console.log(sum)
 }
 
 console.log(stringConcat([1,2,3])); // "123"
 

//  3) Turn an array of voter objects into a count of how many people voted
 function totalVotes(arr) {
   var sum = arr.reduce(function(total, voter) {
      return total + voter.voted
   },0) 
   return sum
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7



// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
   totalCost = arr.reduce(function(total, title){
      return total + title.price
   }, 0)
   return totalCost
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
  newArray = arr.reduce(function(array, oldarray){
     return array.concat(oldarray)
  })
  return newArray
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];