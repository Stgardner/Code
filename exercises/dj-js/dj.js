document.getElementById('square').addEventListener('mouseenter', changeColor);
function changeColor() {
    document.getElementById('square').style.backgroundColor = "blue";
}
document.getElementById('square').addEventListener('mousedown', squareRed);
function squareRed() {
    document.getElementById('square').style.backgroundColor = "red";
}
document.getElementById('square').addEventListener('mouseup', squareYellow);
function squareYellow() {
    document.getElementById('square').style.backgroundColor = "yellow";
}
document.getElementById('square').addEventListener('dblclick', squareGreen);
function squareGreen() {
    document.getElementById('square').style.backgroundColor = "green";
}
document.addEventListener('wheel', squareOrange);
function squareOrange() {
    document.getElementById('square').style.backgroundColor = "orange";
}
document.addEventListener('keydown', logkey);
function logkey(event) {
    var x = event.keyCode;
    if (x === 82) {
        document.getElementById('square').style.backgroundColor = "red";
    }
    if (x === 89) {
        document.getElementById('square').style.backgroundColor = "yellow";
    }
    if (x === 66) {
        document.getElementById('square').style.backgroundColor = "blue";
    }
    if (x === 71) {
        document.getElementById('square').style.backgroundColor = "green";
    }
    if (x === 79) {
        document.getElementById('square').style.backgroundColor = "orange";
    }
}
