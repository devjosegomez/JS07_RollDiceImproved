const output = document.querySelector("#output");
const button = document.querySelector("button");
const audio = document.querySelector("#diceSound");
const gameArea = document.querySelector("#gameArea");
let lastRoll;
//Dice's faces
let dice = [[5], [3,7], [3,5,7], [1,3,7,9], [1,3,5,7,9], [1,3,4,6,7,9]];
            //1,    2,      3   ,   4     ,     5       ,       6

button.addEventListener("click",() =>{
    console.log("Last roll: " + lastRoll);
    button.disabled = true;
    gameArea.classList.add("rubberBand");

    setTimeout(function(){
        button.disabled = false;
        if(gameArea.classList[2]){
            gameArea.classList.remove(gameArea.classList[2]);
        }
    }, 900);
    audio.playbackRate = 1.4;
    audio.play();

    let rollDice = roll(6);
    if(rollDice == lastRoll){
        rollDice = roll(6);
    }
    console.log(rollDice);
    let diceHolder = builder(rollDice);
    if(output.children[0]){
        output.children[0].remove();
    }
    output.appendChild(diceHolder);
    lastRoll = rollDice;
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