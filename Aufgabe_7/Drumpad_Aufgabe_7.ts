/*Array*/
var sounds: HTMLAudioElement [] = [new Audio ("../Aufgabe_7/assets/kick.mp3"), new Audio ("../Aufgabe_7/assets/hihat.mp3"), new Audio ("../Aufgabe_7/assets/snare.mp3"), new Audio ("../Aufgabe_7/assets/A.mp3"), new Audio ("../Aufgabe_7/assets/C.mp3"), new Audio ("../Aufgabe_7/assets/F.mp3"), new Audio ("../Aufgabe_7/assets/G.mp3"), new Audio ("../Aufgabe_7/assets/laugh-2.mp3"), new Audio ("../Aufgabe_7/assets/ShortFartSound.mp3")];

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

/*Funktion*/
function playSample(soundeffects){
    var sounds = new Audio (soundeffects);
    sounds.play();
}

/*Pfad Verlinkung ändern nicht vergessen!*/

/*Beat Playback*/

function Beats(){
setInterval(function() {
    (sounds[0]).play();
    (sounds[1]).play();
    (sounds[2]).play();
 }, 500);}
