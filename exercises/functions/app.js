function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(1,2))

function largestNum(num1, num2, num3) {
    myArray = [num1, num2, num3]
    return Math.max(...myArray)
}
console.log(largestNum(1,2,3))

function isEvenOrOdd(num) {
    if (num %2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(isEvenOrOdd(17))

function twentyString(str) {
    if (str.length <= 20) {
      str = str + str
      return str
    } else {
        var indx = Math.floor(str.length / 2)
        return str.slice(0, indx)
    }
}
console.log(twentyString("Giraffe Goes To the Zoo"))

function fib(n) {
    let arr = [0, 1]
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
console.log(fib(12))