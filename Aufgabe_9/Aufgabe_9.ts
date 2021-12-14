var counter = 0;

function Todo() {
    var task = document.createElement("");
    var input = document.querySelector("#yourtask");
}

function addTask() {
}

document.querySelector("#addtask").addEventListener("click", addTask);
/*function Todo() {
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
        let program = document.getElementById("program");
        // 2. Create <p></p> element
        let p = document.createElement("p");
        // 3. Add text
        p.textContent = addedText;
        p.addEventListener("click", addedText);
        document.querySelector("#addTask").addEventListener("click", newTodo);
    }
}*/