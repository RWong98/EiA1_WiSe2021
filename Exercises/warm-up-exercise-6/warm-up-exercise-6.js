var anzahl = 0;
function buttonClicked() {
    anzahl++;
    document.querySelector("#result").innerHTML = anzahl + "";
}
function buttonClicked1() {
    document.querySelector("#button1").innerHTML = ("Der Zeh.");
    document.querySelector("#button1").addEventListener("click", buttonClicked1);
}
window.addEventListener("load", function () {
    document.querySelector("#button2").addEventListener("click", buttonClicked);
});
//# sourceMappingURL=warm-up-exercise-6.js.map