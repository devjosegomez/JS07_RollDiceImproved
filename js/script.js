const output = document.querySelector("#output");
const button = document.querySelector("button");
//Dice's faces
let dice = [[5], [3,7], [3,5,7], [1,3,7,9], [1,3,5,7,9], [1,3,4,6,7,9]];
            //1,    2,      3   ,   4     ,     5       ,       6

button.addEventListener("click",() =>{
    let rollDice = roll(6);
    console.log(rollDice);
    let diceHolder = builder(rollDice);
    if(output.children[0]){
        output.children[0].remove();
    }
    output.appendChild(diceHolder);
});

function roll(n){
    let randomNumber = Math.floor(Math.random()*n)+1;
    return randomNumber;
}

function builder(n){
    let diceDiv = document.createElement("div");
    let fillDice = dice[n-1];
    console.log(fillDice);
    //Adding class to display dots
    for(let i=1; i<10; i++){
        let divDot = document.createElement("div");
        divDot.setAttribute("class", "dot");
        if(fillDice.includes(i)){
            divDot.classList.add("black");
        }
        diceDiv.appendChild(divDot);
    }
    
    diceDiv.setAttribute("class", "dicer");
    
    return diceDiv;
}