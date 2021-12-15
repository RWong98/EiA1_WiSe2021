var counter: number = 0;
const input: HTMLElement = document.querySelector("#yourtask");

function addTask(): void {
    counter++;
    document.querySelector("h2").innerHTML = counter + " total";
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
    else {listtext.innerHTML = "leer";}
    maindiv.appendChild(unterteilung);
    unterteilung.appendChild(checker);
    unterteilung.appendChild(listtext);
    unterteilung.appendChild(trash);
    input.value = "";

    trash.addEventListener("click", function(): void {maindiv.removeChild(unterteilung); counter--;document.querySelector("h2").innerHTML = counter + " total";});
}
document.querySelector("#addbutton").addEventListener("click", function(): void {addTask();});