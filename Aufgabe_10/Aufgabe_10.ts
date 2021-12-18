var counter: number = 0;
const input: HTMLElement = document.querySelector("#yourtask");

function addTask(): void {
    /*Task Counter*/
    counter++;
    document.querySelector("#tasktotal").innerHTML = counter + " Tasks total";

    document.querySelector("#taskdone").innerHTML = counter + " Tasks done";

    const unterteilung: HTMLDivElement = document.createElement("div");
    const listtext: HTMLElement = document.createElement("p");
    const checker: HTMLInputElement = document.createElement("input");
    const trash: HTMLElement = document.createElement("b");
    const maindiv: HTMLDivElement = document.querySelector(".maindiv");
    const done: HTMLElement = document.querySelector("#taskdone");
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