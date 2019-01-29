//String Methods Exercise
function capitalizeAndLowercase(str) {
 return str.toUpperCase().concat(str.toLowerCase())
}
console.log(capitalizeAndLowercase("Hello"))

function findMiddleIndex(str) {
    return Math.floor(str.length / 2)
}
console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Manhattan Library Building"))

function returnFirstHalf(str) {
    var indx = Math.floor(str.length / 2)
    return str.slice(0, indx)
}
console.log(returnFirstHalf("Hello"))

function capitalizeAndLowercase2(str) {
    var indx = Math.floor(str.length / 2)
    var firstHalf = str.slice(0, indx)
    var secondHalf = str.slice(indx)
        return firstHalf.toUpperCase() + secondHalf.toLowerCase()
    
}
console.log(capitalizeAndLowercase2("Hellooo"))