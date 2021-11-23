window.addEventListener("load", function(){

 /*Worldwide Rechnung*/
 var WW2018: number = Math.round(EU2018 + AF2018 + SA2018 + NA2018 + AS2018 + AU2018);

 /*Kontinente Variablen*/
 var EU: string = "Europa";
 var AF: string = "Africa";
 var SA: string = "South America";
 var NA: string = "North America";
 var AS: string = "Asia";
 var AU: string = "Australia";

 /*Europe Werte*/
 var EU2008: number = 4965.7;
 var EU2018: number = 4209.3;
 /*Europe Rechnungen*/
 var EUrelative: number = Math.round((100 / WW2018) * EU2018);
 var EUzuEUP: number = Math.round((EU2018 / EU2008 - 1) * 100);
 var EUzuEUA: number = Math.round(EU2018 - EU2008);

 /*Africa Werte*/
 var AF2008: number = 1028;
 var AF2018: number = 1235.5;
 /*Africa Rechnungen*/
 var AFrelative: number = Math.round((100 / WW2018) * AF2018);
 var AFzuAFP: number = Math.round((AF2018 / AF2008 - 1) * 100);
 var AFzuAFA: number = Math.round(AF2018 - AF2008);
 
 /*South America Werte*/
 var SA2008: number = 1132.6;
 var SA2018: number = 1261.5;
 /*South America Rechnungen*/
 var SArelative: number = Math.round((100 / WW2018) * SA2018);
 var SAzuSAP: number = Math.round((SA2018 / SA2008 - 1) * 100);
 var SAzuSAA: number = Math.round(SA2018 - SA2008);

 /*North America Werte*/
 var NA2008: number = 6600.4;
 var NA2018: number = 6035.6;
 /*North America Rechnungen*/
 var NArelative: number = Math.round((100 / WW2018) * NA2018);
 var NAzuNAP: number = Math.round((NA2018 / NA2008 - 1) * 100);
 var NAzuNAA: number = Math.round(NA2018 - NA2008);

 /*Asia Werte*/
 var AS2008: number = 12954.7;
 var AS2018: number = 16274.1;
 /*Asia Rechnungen*/
 var ASrelative: number = Math.round((100 / WW2018) * AS2018);
 var ASzuASP: number = Math.round((AS2018 / AS2008 - 1) * 100);
 var ASzuASA: number = Math.round(AS2018 - AS2008);

 /*Australia Werte*/
 var AU2008: number = 1993;
 var AU2018: number = 2100.5;
 /*Australia Rechnungen*/
 var AUrelative: number = Math.round((100 / WW2018) * AU2018);
 var AUzuAuP: number = Math.round((AU2018 / AU2008 - 1) * 100);
 var AUzuAUA: number = Math.round(AU2018 - AU2008);

 /*Chart*/
 var chart: any = document.querySelector(".chart");


function continents(continent, continent18, continentzuwelt, continentzucontinent, continentzucontinentco) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#regionSpecific").innerHTML = continent;
    document.querySelector(".EmissionAbsolute").innerHTML = continent18.toFixed(2);
    document.querySelector(".EmissionRelative").innerHTML = continentzuwelt.toFixed(2) + "%";
    document.querySelector(".GrowthPercent").innerHTML = continentzucontinent.toFixed(2) + "%";
    document.querySelector(".GrowthAbsolute").innerHTML = continentzucontinentco.toFixed(2);
}
document.querySelector(".europe").addEventListener("click", function(){continents (EU, EU2018, EUrelative, EUzuEUP, EUzuEUA) })
document.querySelector(".africa").addEventListener("click", function(){continents (AF, AF2018, AFrelative, AFzuAFP, AFzuAFA) })
document.querySelector(".southamerica").addEventListener("click", function(){continents (SA, SA2018, SArelative, SAzuSAP, SAzuSAA) })
document.querySelector(".northamerica").addEventListener("click", function(){continents (NA, NA2018, NArelative, NAzuNAP, NAzuNAA) })
document.querySelector(".asia").addEventListener("click", function(){continents (AS, AS2018, ASrelative, ASzuASP, ASzuASA) })
document.querySelector(".australia").addEventListener("click", function(){continents (AU, AU2018, AUrelative, AUzuAuP, AUzuAUA) })
});
