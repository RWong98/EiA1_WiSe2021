var counter: number = 0;
var taskdone: number = 0;
var taskopen: number = 0;
const input: HTMLElement = document.querySelector("#yourtask");

function addTask(): void {
    /*Task Counter*/
    counter++;
    document.querySelector("#tasktotal").innerHTML = counter + " Tasks total";
    taskdone++;
    document.querySelector("#taskdone").innerHTML = taskdone + " Tasks done";
    const onedone: HTMLDivElement = document.querySelector(".maindiv");


    document.querySelector("#taskopen").innerHTML = taskopen + " Tasks open";

    const unterteilung: HTMLDivElement = document.createElement("div");
    const listtext: HTMLElement = document.createElement("p");
    const checker: HTMLInputElement = document.createElement("input");
    const trash: HTMLElement = document.createElement("b");
    const maindiv: HTMLDivElement = document.querySelector(".maindiv");
    checker.type = "checkbox";
    checker.className = "checkerbox";
    trash.className = "fas fa-trash";
    listtext.className = "newtext";
    if (input.value != ""){
    listtext.innerHTML = input.value;}
    else {listtext.innerHTML = "Nothing :)";}
    maindiv.appendChild(unterteilung);
    unterteilung.appendChild(checker);
    unterteilung.appendChild(listtext);
    unterteilung.appendChild(trash);
    input.value = "";

    /*Task counter geht beim entfernen von Task runter*/
    trash.addEventListener("click", function(): void {maindiv.removeChild(unterteilung); counter--;document.querySelector("#tasktotal").innerHTML = counter + " Tasks total";});
}
document.querySelector("#addbutton").addEventListener("click", function(): void {addTask();});