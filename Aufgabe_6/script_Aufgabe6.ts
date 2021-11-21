/*Europe Werte*/
var EU2008: number = 4965.7;
var EU2018: number = 4209.3;
var EUrelative: number = Math.round((100 / WW2018) * EU2018);
var EUpercent: number = Math.round(100 / EU2008 * EU2018 - 100);
var EUzuEUP: number = Math.round((EU2018 / EU2008 - 1) * 100);
var EUzuEUA: number = Math.round(EU2018 - EU2008);

/*Africa Werte*/
var AF2008: number = 1028;
var AF2018: number = 1235.5;
var AFrelative: number = Math.round((100 / WW2018) * AF2018);
var AFpercent: number = Math.round(100 / AF2008 * AF2018 - 100);
var AFzuAFP: number = Math.round((AF2018 / AF2008 - 1) * 100);
var AFzuAFA: number = Math.round(AF2018 - AF2008);

/*South America Werte*/
var SA2008: number = 1132.6;
var SA2018: number = 1261.5;
var SArelative: number = Math.round((100 / WW2018) * SA2018);
var SApercent: number = Math.round(100 / SA2008 * SA2018 - 100);
var SAzuSAP: number = Math.round((SA2018 / SA2008 - 1) * 100);
var SAzuSAA: number = Math.round(SA2018 - SA2008);

/*North America Werte*/
var NA2008: number = 6600.4;
var NA2018: number = 6035.6;
var NArelative: number = Math.round((100 / WW2018) * NA2018);
var NApercent: number = Math.round(100 / NA2008 * NA2018 - 100);
var NAzuNAP: number = Math.round((NA2018 / NA2008 - 1) * 100);
var NAzuNAA: number = Math.round(NA2018 - NA2008);

/*Asia Werte*/
var AS2008: number = 12954.7;
var AS2018: number = 16274.1;
var ASrelative: number = Math.round((100 / WW2018) * AS2018);
var ASpercent: number = Math.round(100 / AS2008 * AS2018 - 100);
var ASzuASP: number = Math.round((AS2018 / AS2008 - 1) * 100);
var ASzuASA: number = Math.round(AS2018 - AS2008);

/*Australia Werte*/
var AU2008: number = 1993;
var AU2018: number = 2100.5;
var AUrelative: number = Math.round((100 / WW2018) * AU2018);
var AUpercent: number = Math.round(100 / AU2008 * AU2018 - 100);
var AUzuAuP: number = Math.round((AU2018 / AU2008 - 1) * 100);
var AUzuAUA: number = Math.round(AU2018 - AU2008);

/*Worldwide*/
var WW2018: number = Math.round(EU2018 + AF2018 + SA2018 + NA2018 + AS2018 + AU2018);

window.addEventListener("load", function(){
    /*Europa*/
    function EURO(){
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector("#regionSpecific").innerHTML = "Europe";
    document.querySelector(".EmissionAbsolute").innerHTML = EU2018 + " kg CO2";
    document.querySelector(".EmissionRelative").innerHTML = EUrelative + "%";
    document.querySelector(".GrowthPercent").innerHTML = EUpercent + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = EUzuEUA + " kg CO2";}
/*Europa Event*/
document.querySelector(".europe").addEventListener("click",EURO);

/*Africa*/
function AFRI(){
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector("#regionSpecific").innerHTML = "Africa";
    document.querySelector(".EmissionAbsolute").innerHTML = AF2018 + " kg CO2";
    document.querySelector(".EmissionRelative").innerHTML = AFrelative + "%";
    document.querySelector(".GrowthPercent").innerHTML = AFpercent + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = AFzuAFA + " kg CO2";}
/*Africa Event*/
document.querySelector(".africa").addEventListener("click",AFRI);

/*South America*/
function SOAM(){
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector("#regionSpecific").innerHTML = "South America";
    document.querySelector(".EmissionAbsolute").innerHTML = SA2018 + " kg CO2";
    document.querySelector(".EmissionRelative").innerHTML = SArelative + "%";
    document.querySelector(".GrowthPercent").innerHTML = SApercent + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = SAzuSAA + " kg CO2";}
/*South America Event*/
document.querySelector(".southamerica").addEventListener("click",SOAM);

/*North America*/
function NOAM(){
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector("#regionSpecific").innerHTML = "North America";
    document.querySelector(".EmissionAbsolute").innerHTML = NA2018 + " kg CO2";
    document.querySelector(".EmissionRelative").innerHTML = NArelative + "%";
    document.querySelector(".GrowthPercent").innerHTML = NApercent + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = NAzuNAA + " kg CO2";}
/*North America Event*/
document.querySelector(".northamerica").addEventListener("click",NOAM);

/*Asia*/
function ASIA(){
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector("#regionSpecific").innerHTML = "Asia";
    document.querySelector(".EmissionAbsolute").innerHTML = AS2018 + " kg CO2";
    document.querySelector(".EmissionRelative").innerHTML = ASrelative + "%";
    document.querySelector(".GrowthPercent").innerHTML = ASpercent + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = ASzuASA + " kg CO2";}
/*Asia Event*/
document.querySelector(".asia").addEventListener("click",ASIA)

/*Australia*/
function AUST(){
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector("#regionSpecific").innerHTML = "Australia";
    document.querySelector(".EmissionAbsolute").innerHTML = AU2018 + " kg CO2";
    document.querySelector(".EmissionRelative").innerHTML = AUrelative + "%";
    document.querySelector(".GrowthPercent").innerHTML = AUpercent + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = AUzuAUA + " kg CO2";}
/*Australia Event*/
document.querySelector(".australia").addEventListener("click",AUST)

/*Chartwrapper*/
function chart(){
    document.querySelector(".chart")
}
document.querySelector(".chartwrapper").addEventListener("click",chart);

});
