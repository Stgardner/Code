function reverseString(str) {
return str.split('').reverse().join('');
}
console.log(reverseString("Hello"))

function isNum(str) {
    if (typeof str === 'number') {
        return true
    } else {
        return false
    }
}

function isEven(num) {
    if (num%2===0) {
        return true
    } else {
        return false
    }
}

function averageArray(arr) {
    var total = 0;
    for(i=0; i<arr.length; i++) {
     total += arr[i];
 }
    var avg = total / arr.length;
    return avg;
}
console.log(averageArray([4, 4, 4, 4]))

var letters = ["a", "b", "c"]
var numbers = [1, 2, 3]
function combineArrays(letters, numbers) {
    var myArray = [];
    for(i=0; i<letters.length;i++) {
        myArray.push(letters[i], numbers[i])
    }
    return myArray;
}
console.log(combineArrays(letters, numbers))