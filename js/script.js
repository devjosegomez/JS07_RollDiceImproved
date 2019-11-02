const output = document.querySelector("#output");
const button = document.querySelector("button");

button.addEventListener("click",() =>{
    let rollDice = roll(6);
    console.log(rollDice);
    let diceHolder = builder(rollDice);
    output.appendChild(diceHolder);
});

function roll(n){
    let randomNumber = Math.floor(Math.random()*n)+1;
    return randomNumber;
}

function builder(n){
    let diceDiv = document.createElement("div");
    diceDiv.setAttribute("class", "dicer");
    return diceDiv;
}