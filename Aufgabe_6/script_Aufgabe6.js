window.addEventListener("load", function () {
    /*Kontinente Variablen*/
    var EU = "Europa";
    var AF = "Africa";
    var SA = "South America";
    var NA = "North America";
    var AS = "Asia";
    var AU = "Australia";
    /*Europe Werte*/
    var EU2008 = 4965.7;
    var EU2018 = 4209.3;
    /*Europe Rechnungen*/
    var EUzuEUP = (EU2018 / EU2008 - 1) * 100;
    var EUzuEUA = EU2018 - EU2008;
    /*Africa Werte*/
    var AF2008 = 1028;
    var AF2018 = 1235.5;
    /*Africa Rechnungen*/
    var AFzuAFP = (AF2018 / AF2008 - 1) * 100;
    var AFzuAFA = AF2018 - AF2008;
    /*South America Werte*/
    var SA2008 = 1132.6;
    var SA2018 = 1261.5;
    /*South America Rechnungen*/
    var SAzuSAP = (SA2018 / SA2008 - 1) * 100;
    var SAzuSAA = SA2018 - SA2008;
    /*North America Werte*/
    var NA2008 = 6600.4;
    var NA2018 = 6035.6;
    /*North America Rechnungen*/
    var NAzuNAP = (NA2018 / NA2008 - 1) * 100;
    var NAzuNAA = NA2018 - NA2008;
    /*Asia Werte*/
    var AS2008 = 12954.7;
    var AS2018 = 16274.1;
    /*Asia Rechnungen*/
    var ASzuASP = (AS2018 / AS2008 - 1) * 100;
    var ASzuASA = AS2018 - AS2008;
    /*Australia Werte*/
    var AU2008 = 1993;
    var AU2018 = 2100.5;
    /*Australia Rechnungen*/
    var AUzuAuP = (AU2018 / AU2008 - 1) * 100;
    var AUzuAUA = AU2018 - AU2008;
    /*Worldwide Rechnung*/
    var WW2018 = EU2018 + AF2018 + SA2018 + NA2018 + AS2018 + AU2018;
    /*Relative Rechnungne zur Welt, weil sonst von der Reihenfolge nicht gerechnet werden kann*/
    /*EU*/
    var EUrelative = (100 / WW2018) * EU2018;
    console.log((100 / WW2018) * AU2018);
    /*AF*/
    var AFrelative = (100 / WW2018) * AF2018;
    /*SA*/
    var SArelative = (100 / WW2018) * SA2018;
    /*NA*/
    var NArelative = (100 / WW2018) * NA2018;
    /*AS*/
    var ASrelative = (100 / WW2018) * AS2018;
    /*AU*/
    var AUrelative = (100 / WW2018) * AU2018;
    function continents(continent, continent18, continentzuwelt, continentzucontinent, continentzucontinentco) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#regionSpecific").innerHTML = continent;
        document.querySelector(".EmissionAbsolute").innerHTML = continent18.toFixed(2);
        document.querySelector(".EmissionRelative").innerHTML = continentzuwelt.toFixed(2) + "%";
        document.querySelector(".GrowthPercent").innerHTML = continentzucontinent.toFixed(2) + "%";
        document.querySelector(".GrowthAbsolute").innerHTML = continentzucontinentco.toFixed(2);
        document.querySelector(".chart").setAttribute("style", "height: 20px");
    }
    document.querySelector(".europe").addEventListener("click", function () { continents(EU, EU2018, EUrelative, EUzuEUP, EUzuEUA); });
    document.querySelector(".africa").addEventListener("click", function () { continents(AF, AF2018, AFrelative, AFzuAFP, AFzuAFA); });
    document.querySelector(".southamerica").addEventListener("click", function () { continents(SA, SA2018, SArelative, SAzuSAP, SAzuSAA); });
    document.querySelector(".northamerica").addEventListener("click", function () { continents(NA, NA2018, NArelative, NAzuNAP, NAzuNAA); });
    document.querySelector(".asia").addEventListener("click", function () { continents(AS, AS2018, ASrelative, ASzuASP, ASzuASA); });
    document.querySelector(".australia").addEventListener("click", function () { continents(AU, AU2018, AUrelative, AUzuAuP, AUzuAUA); });
});
//# sourceMappingURL=script_Aufgabe6.js.map