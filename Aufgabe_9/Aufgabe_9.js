/* Aufgabe 9 Rausch Videos Test
var myNumbers:  number [] = [7, 12, 29, 395, 256, 68];

var highestNumber: number = myNumbers[0];

for (let i = 0; i < highestNumber; i++) {
    highestNumber = myNumbers[i];
    
    if (myNumbers[i] > highestNumber) {
        highestNumber = myNumbers[i];
    }
    console.log(highestNumber);
} */
function Todo() {
    var program = document.getElementById("program");
    var p = document.createElement("p");
    p.textContent = "Aufgabe hinzufügen";
    program.appendChild(p);
    var input = document.querySelector("#yourTask");
    function newTodo() {
        //console.log(input)
        var addedText;
        if (input.value != "")
            addedText = input.value;
        // Textfeld leeren
        input.value = "";
        // 1. Select div element
        var program = document.getElementById("program");
        // 2. Create <p></p> element
        var p = document.createElement("p");
        // 3. Add text
        p.textContent = addedText;
        p.addEventListener("click", addedText);
        document.querySelector("#addTask").addEventListener("click", newTodo);
    }
}
//# sourceMappingURL=Aufgabe_9.js.map