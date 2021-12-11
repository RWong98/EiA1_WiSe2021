/*Array*/
var sounds = ["../Aufgabe_8/assets/kick.mp3",
    "../Aufgabe_8/assets/hihat.mp3",
    "../Aufgabe_8/assets/snare.mp3",
    "../Aufgabe_8/assets/A.mp3",
    "../Aufgabe_8/assets/F.mp3",
    "../Aufgabe_8/assets/Discord_notification.mp3",
    "../Aufgabe_8/assets/Whatsapp_Notification2.mp3",
    "../Aufgabe_8/assets/Bully_Maguire_Dirt2.mp3",
    "../Aufgabe_8/assets/Give_me_rent.mp3"];
var key = 0;
var interval;
var myBeat;
var index = 0;
var randomBeat;
/*Funktion*/
function playSample(sounds) {
    var sound = new Audio(sounds);
    sound.play();
}
/*Buttons*/
document.querySelector("#Button01").addEventListener("click", function () { playSample(sounds[0]); });
document.querySelector("#Button02").addEventListener("click", function () { playSample(sounds[1]); });
document.querySelector("#Button03").addEventListener("click", function () { playSample(sounds[2]); });
document.querySelector("#Button04").addEventListener("click", function () { playSample(sounds[3]); });
document.querySelector("#Button05").addEventListener("click", function () { playSample(sounds[4]); });
document.querySelector("#Button06").addEventListener("click", function () { playSample(sounds[5]); });
document.querySelector("#Button07").addEventListener("click", function () { playSample(sounds[6]); });
document.querySelector("#Button08").addEventListener("click", function () { playSample(sounds[7]); });
document.querySelector("#Button09").addEventListener("click", function () { playSample(sounds[8]); }); //.play() entfernt
document.querySelector("#play").addEventListener("click", playBeat);
document.querySelector("#random").addEventListener("click", randomInterval);
document.querySelector("#trash").addEventListener("click", Delete);
/*Beat Playback*/
/*function Beats() {
    setInterval(function () {
    playSample (sounds[5]);
    playSample (sounds[7]);
    playSample (sounds[8]);
    }, 500);
} */
//Beat neue Funktion
function startInterval() {
    myBeat = setInterval(function () {
        playSample(sounds[0]);
        playSample(sounds[1]);
        playSample(sounds[2]);
    }, 700);
}
function randomInterval() {
    var random = Math.floor(Math.random() * 10);
    randomBeat = setInterval(function () {
        playSample(sounds[random]);
    }, 500);
}
/*Playbutton soll sich zum Stopbutton ändern*/
function playBeat() {
    if (document.querySelector("#play").getAttribute("class") == "fas fa-play fa-2x") {
        document.querySelector("#play").setAttribute("class", "fas fa-stop fa-2x");
        startInterval();
    }
    else {
        document.querySelector("#play").setAttribute("class", "fas fa-play fa-2x");
        clearInterval(myBeat);
    }
}
/*Pfad Verlinkung ändern nicht vergessen!*/
function Delete() {
}
/*
Tutorium Christian Beispiel um mich daran zu orientieren

let außerhalbIndex = 0;

let beatArray = ["beat1.mp3", "beat2.mp3"]


let meinIntervall;

document.querySelector("#playButton").addEventListener("click", function() {
starteIntervall();
});

document.querySelector("#stopButton").addEventListener("click", function() {
    stoppeIntervall();
});

function stoppeIntervall () {
   // stoppt den Intervall der aktuell läuft
   // clearIntervall
    meinIntervall.clearInterval()
   // außerhalbIndex = 2;
   außerhalbIndex = 0;
}

function starteIntervall () {
    meinIntervall = setInterval(() => {
        playSample();
    }, 500);
}




function playSample () {

    console.log(beatArray[außerhalbIndex].play());

    // wird immer 1 erhöhen
    außerhalbIndex++;

    if (beatArray.length == außerhalbIndex) {
        außerhalbIndex = 0;
    }

} */
/*
Aufgabe 9 Video Interface und Objekt Instanzen Test nach Rausch Videos

interface People {
    name: string;
    age: number;
}

var people: People [] = [
    {
        name: "Gabriel",
        age: 40
    },
    {
        name: "Peter",
        age: 99
    }
];

for (let index: number = 0; index < people.length; index ++) {
    console.log(people[index].name);
    
}*/ 
//# sourceMappingURL=Drumpad_Aufgabe_8.js.map