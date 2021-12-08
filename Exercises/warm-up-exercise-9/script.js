/*### Übung A:
Bilden Sie drei Personen dieses Kurses durch Objekte ab. Erstellen Sie dazu ein Interface, dass alle relevanten Eigenschaften dieser Personen beinhaltet.

### Übung B:
Die Namen dieser drei Personen sollen nacheinander in der Konsole ausgegeben werden. Entwickeln Sie eine Lösung, die flexibel ist und einfach skaliert, um auch 100 oder 1000 Personen ausgeben lassen zu können.*/
/*Variante Rausch*/
var listeVonPersonen = [
    { name: "Marc",
        job: "Student",
        geschlecht: "m",
        alter: 19,
        brille: true },
    { name: "Robin",
        job: "Student",
        geschlecht: "m",
        alter: 22,
        brille: false },
    { name: "Ronja",
        job: "Student",
        geschlecht: "w",
        alter: 20,
        brille: false },
];
console.log(listeVonPersonen[1].alter);
for (var i = 0; i < listeVonPersonen.length; i++) {
    console.log(listeVonPersonen[i].name);
}
/*Variante Silvan*/
var p1 = {
    name: "Marc",
    job: "Student",
    geschlecht: "m",
    alter: 19,
    brille: true
};
var p2 = {
    name: "Robin",
    job: "Student",
    geschlecht: "m",
    alter: 22,
    brille: false
};
var p3 = {
    name: "Ronja",
    job: "Student",
    geschlecht: "w",
    alter: 20,
    brille: false
};
console.log(p1.name, p2.name, p3.name);
//Ermitteln Sie aus einer beliebigen Anzahl numerischer Werte deren Summe und geben Sie diese in der Konsole aus.
/**
*
* 1. einer beliebigen Anzahl numerischer Werte
*
* 2. Ermitteln Sie .... deren Summe
*
*
* 3. geben Sie diese in der Konsole aus.
*
*/
var nums = [2, 345, 34, 347, 1, 46, 42, 63, 346];
var sum = 0;
for (var index = 0; index < nums.length; index++) {
    sum += nums[index];
}
console.log(sum);
//# sourceMappingURL=script.js.map