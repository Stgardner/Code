function calculateGoons(e) {
    e.preventDefault()
var goombas = document.getElementById('goombaCaught').value;
var bobombs = document.getElementById('bobombCaught').value;
var cheepcheeps = document.getElementById('cheepcheepCaught').value;
var rslt = (+goombas*5) + (+bobombs*7) + (+cheepcheeps*11)
document.getElementById("result").innerHTML = ("You Get " + rslt  + " Coins!" );
document.getElementById('baddies').reset();
}
document.getElementById("submit-button").addEventListener('click', calculateGoons)