/*Europe*/
var EU2008 = 4965.7;
var EU2018 = 4209.3;
/*Africa*/
var AF2008 = 1028;
var AF2018 = 1235.5;
/*South America*/
var SA2008 = 1132.6;
var SA2018 = 1261.5;
/*North America*/
var NA2008 = 6600.4;
var NA2018 = 6035.6;
/*Asia*/
var AS2008 = 12954.7;
var AS2018 = 16274.1;
/*Australia*/
var AU2008 = 1993;
var AU2018 = 2100.5;
/*Worldwide*/
var WW2018 = EU2018 + AF2018 + SA2018 + NA2018 + AS2018 + AU2018;
/*Console*/
console.log("Hello World!");
console.log("Weltweite CO2 Emissionen 2018: " + WW2018);
console.log("Die Emission von Europa sind: " + EU2018, "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit 4%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um -1.2% verändert.");
console.log("2018 im Vergleich zu 2008 sind das -400 kg CO2.");
console.log("Die Emission von Afrika ist: " + AF2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + (100 / WW2018) * AF2018, "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / AF2008 * AF2018 - 100), "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (AF2018 - AF2008), "kg CO2.");
console.log("Die Emission von Südamerika ist: " + SA2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + (100 / WW2018) * SA2018, "%.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / SA2008 * SA2018 - 100), "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (SA2018 - SA2008), "kg CO2.");
console.log("Die Emission von Nordamerika ist: " + NA2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + (100 / WW2018) * NA2018, "%.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / NA2008 * NA2018 - 100), "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (NA2018 - NA2008), "kg CO2.");
console.log("Die Emission von Asien ist: " + AS2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + (100 / WW2018) * AS2018, "%.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / AS2008 * AS2018 - 100), "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (AS2018 - AS2008), "kg CO2.");
console.log("Die Emission von Australien ist: " + AU2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + (100 / WW2018) * AU2018, "%.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / AU2008 * AU2018 - 100), "% verändert.");
//# sourceMappingURL=script.js.map