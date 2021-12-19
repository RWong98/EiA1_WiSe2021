var counter = 0;
var taskdone = 0;
var taskopen = 0;
var input = document.querySelector("#yourtask");
function addTask() {
    /*Task Counter*/
    counter++;
    document.querySelector("#tasktotal").innerHTML = counter + " Tasks total";
    taskdone++;
    document.querySelector("#taskdone").innerHTML = taskdone + " Tasks done";
    var onedone = document.querySelector(".maindiv");
    document.querySelector("#taskopen").innerHTML = taskopen + " Tasks open";
    var unterteilung = document.createElement("div");
    var listtext = document.createElement("p");
    var checker = document.createElement("input");
    var trash = document.createElement("b");
    var maindiv = document.querySelector(".maindiv");
    checker.type = "checkbox";
    checker.className = "checkerbox";
    trash.className = "fas fa-trash";
    listtext.className = "newtext";
    if (input.value != "") {
        listtext.innerHTML = input.value;
    }
    else {
        listtext.innerHTML = "Nothing :)";
    }
    maindiv.appendChild(unterteilung);
    unterteilung.appendChild(checker);
    unterteilung.appendChild(listtext);
    unterteilung.appendChild(trash);
    input.value = "";
    /*Task counter geht beim entfernen von Task runter*/
    trash.addEventListener("click", function () { maindiv.removeChild(unterteilung); counter--; document.querySelector("#tasktotal").innerHTML = counter + " Tasks total"; });
}
document.querySelector("#addbutton").addEventListener("click", function () { addTask(); });
//# sourceMappingURL=Aufgabe_10.js.map