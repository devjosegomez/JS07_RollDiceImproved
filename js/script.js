const output = document.querySelector("#output");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const button = document.querySelector("button");

button.addEventListener("click",() =>{
    let tmp="";
    console.log(1);
    let rolls = [roll(6), roll(6)]; //index 0 Player(You) / index 1 Computer
    console.log(rolls);
    if(rolls[0] == rolls[1]){
        tmp = "Hey! it's a draw @.@";
    }else if(rolls[0] > rolls[1]){
        tmp = "Player wins!";
    }else{
        tmp = "Computer wins!"
    }
    
    output.innerHTML = "<h1>Let's roll on!</h1>";
    output.innerHTML += `<h2>${tmp}</h2>`;
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];
});

function roll(n){
    let randomNumber = Math.floor(Math.random()*n)+1;
    let diceSymbol = "&#"+(9855+randomNumber)+";";
    return `${randomNumber} ${diceSymbol}`;
}
