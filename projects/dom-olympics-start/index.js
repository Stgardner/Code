document.getElementById("header").innerHTML += `<h1 class="header">Javascript Made This!<h1>`;
document.getElementById("header").innerHTML += `<h2 class="header"><div><span class="name">Stuart</span> wrote the Javascript</div><h2>`;

function changeMessages() {
document.getElementsByClassName("message left")[0].textContent = `I have something fun to talk about`;
document.getElementsByClassName("message right")[0].textContent = `Cool, what you wanna talk about?`;
document.getElementsByClassName("message left")[1].textContent = `Cows!`;
document.getElementsByClassName("message right")[1].textContent = `Mooooooooooooo`;
}
document.getElementById("make this positive").addEventListener('click', changeMessages);

function clearMessages() {
    document.getElementsByClassName("messages")[0].innerHTML = null;
    }
document.getElementById("clear-button").addEventListener('click', clearMessages);

x=0;
function addMessage() {
    x++;
    if (x%2===0) {
    var messages =  document.getElementsByClassName("message right")
    messages[0].innerHTML = messages[1].innerHTML;
    var userMessage = document.getElementById("userInput");
    document.getElementsByClassName('message right')[1].innerHTML = userMessage.value;
    } else {
        var messages2 =  document.getElementsByClassName("message left")
    messages2[0].innerHTML = messages2[1].innerHTML;
    var userMessage = document.getElementById("userInput");
    document.getElementsByClassName('message left')[1].innerHTML = userMessage.value;

    }
}
document.getElementById("send-button").addEventListener('click', addMessage);

function colorChange() {
    if (document.getElementById('theme-drop-down').value === 'theme-one') {
        document.getElementsByClassName('left')[0].style.backgroundColor = 'teal';
        document.getElementsByClassName('left')[1].style.backgroundColor = 'teal';
        document.getElementsByClassName('right')[0].style.backgroundColor = 'yellow';
        document.getElementsByClassName('right')[1].style.backgroundColor = 'yellow';
    }
    if (document.getElementById('theme-drop-down').value === 'theme-two') {
    document.getElementsByClassName('left')[0].style.backgroundColor = '#73FF96';
    document.getElementsByClassName('left')[1].style.backgroundColor = '#73FF96';
    document.getElementsByClassName('right')[0].style.backgroundColor = '#FF5D30';
    document.getElementsByClassName('right')[1].style.backgroundColor = '#FF5D30';
    }
 };
 document.getElementById('theme-drop-down').addEventListener('change', colorChange);