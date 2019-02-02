function addNumbers(e) {
    e.preventDefault()
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var addResult = +num1 + +num2;
    document.getElementById('result').innerHTML = addResult;
}

document.getElementById("add-button").addEventListener('click', addNumbers)

function subtractNumbers(e) {
    e.preventDefault()
    var num1 = document.getElementById('nums1').value;
    var num2 = document.getElementById('nums2').value;
    var subtractResult = (+num1) - (+num2);
    document.getElementById('result').innerHTML = subtractResult;
}

document.getElementById('subtract-button').addEventListener('click', subtractNumbers)

function multNumbers(e) {
    e.preventDefault()
    var num1 = document.getElementById('numm1').value;
    var num2 = document.getElementById('numm2').value;
    var multResult = (+num1) * (+num2);
    document.getElementById('result').innerHTML = multResult;
}

document.getElementById('multiply-button').addEventListener('click', multNumbers)
