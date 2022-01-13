var array = ["rock", "paper", "sissors"];

function computerPlay (){
    var x = parseInt((3*Math.random()));
    return(array[x]);
}

function playRound(playerSelection, computerSelection){
    var yours = 0;
    var computer = 0;
    for (var i = 0; i<3; i++){
        if (playerSelection == array[i]){
            yours = i;
        }
        if (computerSelection == array[i]){
            computer = i;
        }
    }
    difference = yours - computer;
    var returnable = "";
    //1, -2 = win 1 and -2 are losing
    if (difference == 0){
        returnable = "Tie"
    }else if (difference == 1 || difference == -2){
        returnable = "You win! " + array[yours] + "beats" + array[computer];
    } else {
        returnable = "You lose! " + array[computer] + "beats" + array[yours];
    }
    return returnable;
}
function init (){
const yours = document.querySelector("div#results");
const roundResults = document.createElement("div");
const runningScore = document.createElement("div");
yours.appendChild(roundResults);
yours.appendChild(runningScore);
}
init();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", callback));

function callback(e){
    
    yours.style = "white-space: pre";
    yours.textContent = ("You chose " + e.target.id + "\n" +(playRound(e.target.id, computerPlay())));
}





