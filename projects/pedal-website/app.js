function toggleSound1() {
    var audioElem = document.getElementById('audio1');
    if (audioElem.paused) {
        audioElem.volume = 0.68;
      audioElem.play();
      audioElem.loop = true;
}
    else
      audioElem.pause();
    
}

function onMouseOver1() {
    document.getElementById("container").style.backgroundImage = "url('images/yellow_image.jpg')"
}

function onMouseOut1() {
    document.getElementById("container").style.backgroundImage = null;
    document.getElementById("container").style.backgroundColor = "#000000";
}

function onMouseOver2() {
   var s =  document.getElementById("container").style.backgroundImage = "url('images/orange_image.jpg')"
}

function onMouseOut2() {
    document.getElementById("container").style.backgroundImage = null;
    document.getElementById("container").style.backgroundColor = "#000000";
}

function toggleSound2() {
    var audioElem = document.getElementById('audio2');
    if (audioElem.paused) {
        audioElem.volume = 0.75;
      audioElem.play();
      audioElem.loop = true;
}
    else
      audioElem.pause();
    
}

function onMouseOver3() {
    var s =  document.getElementById("container").style.backgroundImage = "url('images/blue_image.jpg')"
 }
 
 function onMouseOut3() {
     document.getElementById("container").style.backgroundImage = null;
     document.getElementById("container").style.backgroundColor = "#000000";
 }

 function toggleSound3() {
    var audioElem = document.getElementById('audio3');
    if (audioElem.paused) {
        audioElem.volume = 0.5;
      audioElem.play();
      audioElem.loop = true
}
    else
      audioElem.pause();
    
}