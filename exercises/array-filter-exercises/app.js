// numbers = [3, 6, 8, 2]
// function fiveAndGreaterOnly(numbers) {
//     var newArr = numbers.filter(number => number >= 5)
//     return newArr 
//   }
  
//   console.log(fiveAndGreaterOnly(numbers)) /// [6, 8]


//   function evensOnly(arr) {
//    var evens = arr.filter(ar => ar % 2 === 0)
//    return evens
//   }
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//   function fiveCharactersOrFewerOnly(arr) {
//     var fiveOrFewer = arr.filter(ar => ar.length <= 5)
//     return fiveOrFewer
//   }

//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// function peopleWhoBelongToTheIlluminati(arr){
//     return arr.filter(x=>x.member === true)
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ])); 

//   function ofAge(arr){
//     return arr.filter(x=>x.age > 18)
//   }
//   // test
//   console.log(ofAge([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));