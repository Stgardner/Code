var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
console.log(vegetables)
fruit.shift()
console.log(fruit)
indx = fruit.indexOf("orange")
fruit.push(indx)
console.log(fruit)
lngth = vegetables.length
vegetables.push(lngth)
food = fruit.concat(vegetables)
console.log(food)
food.splice(4, 2)
console.log(food)
food.reverse()
console.log(food)

console.log(food.toString())