/*Array*/
var sounds = [new Audio("../Aufgabe_8/assets/kick.mp3"),
    new Audio("../Aufgabe_8/assets/hihat.mp3"),
    new Audio("../Aufgabe_8/assets/snare.mp3"),
    new Audio("../Aufgabe_8/assets/A.mp3"),
    new Audio("../Aufgabe_8/assets/F.mp3"),
    new Audio("../Aufgabe_8/assets/Discord_notification.mp3"),
    new Audio("../Aufgabe_8/assets/Whatsapp_Notification2.mp3"),
    new Audio("../Aufgabe_8/assets/Bully_Maguire_Dirt2.mp3"),
    new Audio("../Aufgabe_8/assets/Give_me_rent.mp3")];
var key = 0;
var interval;
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
function playSample(soundeffects) {
    soundeffects.play();
}
/*Beat Playback*/
function Beats() {
    setInterval(function () {
        (sounds[5]).play();
        (sounds[7]).play();
        (sounds[8]).play();
    }, 500);
}
/*Playbutton soll sich zum Stopbutton ändern*/
function playagain() {
    interval = setInterval(Beats, 500);
}
function playBeat() {
    if (document.querySelector("#play").getAttribute("class") == "fas fa-play fa-2x") {
        document.querySelector("#play").setAttribute("class", "fas fa-stop fa-2x");
        Beats();
    }
    else {
        document.querySelector("#play").setAttribute("class", "fas fa-play fa-2x");
        clearInterval(interval);
    }
}
/*Pfad Verlinkung ändern nicht vergessen!*/
function BeatRandom() {
    var soundstotal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var index = 0; index <= soundstotal; index++) {
        soundstotal + index;
    }
}
function Delete() {
    /*Gehe heute ins Tutorium*/
}
//# sourceMappingURL=Drumpad_Aufgabe_8.js.map