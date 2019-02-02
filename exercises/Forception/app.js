// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"

// function forception(people, alphabet) {
//     var arr = []
//     var alphaArr = alphabet.toUpperCase().split('')
//     for(var i=0; i < people.length; i++) {
//         arr.push(people[i] + ":")
//         for(var j=0; j<alphaArr.length; j++) {
            
//             arr.push(alphaArr[j])
//         }
//        }
//        return arr
       
// }

// console.log(forception(people, alphabet))
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet= "abcdefghijklmnopqrstuvwxyz"

 function forception(people, alphabet) {
     var myArray = []
     var alphaArray = alphabet.toUpperCase()
     for (i=0; i<people.length; i++) {
        myArray.push(people[i] + ":")
        for(j=0; j<alphaArray.length;j++) {
            myArray.push(alphaArray[j])
        }
     }
     return(myArray)
 }
console.log(forception(people, alphabet))

















