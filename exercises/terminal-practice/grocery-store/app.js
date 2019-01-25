var shopper = {
    groceryCart: ['bananas', 'apples', 'pears', 'popcorn'],
    prices: [11, 3.00, 4.25, 1.99],
    isGroceryCartFull: shopper.groceryCart.length > 0,
}
var sum = shopper.prices.reduce(add);
    function add(a, b) {
        return a + b;
    }
function pay(amount) {
    if (amount < sum) {
        console.log('You need more money!');
    }
    else {
        change = amount - sum
        console.log('Your change is ' + change.toFixed(2))
    }

}
pay(45)