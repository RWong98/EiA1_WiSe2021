/*Array*/
var sounds: HTMLAudioElement [] = 
[new Audio ("../Aufgabe_8/assets/kick.mp3"), 
new Audio ("../Aufgabe_8/assets/hihat.mp3"), 
new Audio ("../Aufgabe_8/assets/snare.mp3"), 
new Audio ("../Aufgabe_8/assets/A.mp3"), 
new Audio ("../Aufgabe_8/assets/F.mp3"), 
new Audio ("../Aufgabe_8/assets/Discord_notification.mp3"), 
new Audio ("../Aufgabe_8/assets/Whatsapp_Notification2.mp3"), 
new Audio ("../Aufgabe_8/assets/Bully_Maguire_Dirt2.mp3"), 
new Audio ("../Aufgabe_8/assets/Give_me_rent.mp3")];

var key = 0;

/*Buttons*/
document.querySelector("#Button01").addEventListener("click", function () { (sounds[0]).play(); });
document.querySelector("#Button02").addEventListener("click", function () { (sounds[1]).play(); });
document.querySelector("#Button03").addEventListener("click", function () { (sounds[2]).play(); });
document.querySelector("#Button04").addEventListener("click", function () { (sounds[3]).play(); });
document.querySelector("#Button05").addEventListener("click", function () { (sounds[4]).play(); });
document.querySelector("#Button06").addEventListener("click", function () { (sounds[5]).play(); });
document.querySelector("#Button07").addEventListener("click", function () { (sounds[6]).play(); });
document.querySelector("#Button08").addEventListener("click", function () { (sounds[7]).play(); });
document.querySelector("#Button09").addEventListener("click", function () { (sounds[8]).play(); });
document.querySelector("#play").addEventListener("click", playBeat);
document.querySelector("#random").addEventListener("click", BeatRandom);
document.querySelector("#trash").addEventListener("click", Delete);

/*Funktion*/
function playSample(soundeffects){
    var sounds = new Audio (soundeffects);
    sounds.play();
}

/*Beat Playback*/

function Beats(){
setInterval(function() {
    (sounds[5]).play();
    (sounds[7]).play();
    (sounds[8]).play();
 }, 500);
}

/*Playbutton soll sich zum Stopbutton ändern*/
function playBeat() {
    if (document.querySelector("#play").getAttribute("class") == "fas fa-play fa-2x") {
        document.querySelector("#play").setAttribute("class", "fas fa-stop fa-2x");
        Beats();
    }
    else {
        document.querySelector("#play").setAttribute("class", "fas fa-play fa-2x");
        Beats();
    }
}
 /*Pfad Verlinkung ändern nicht vergessen!*/

function BeatRandom() {
/*brauche noch Zeit zum überarbeiten :/, müsste noch fragen*/
}


function Delete() {
/*brauche noch Zeit zum überarbeiten :/*/
}
/*function BeatRandom(randomsounds) {
    var max = 9;
    var min = 0;
    var sounds = [sounds[0], sounds[1], sounds[2], sounds[5], sounds[6], sounds[7], sounds[8]];
    Math.floor(Math.random() * (max - min + 1)) + min;
   var random = new Audio (randomsounds);
   random.play();
}*/

