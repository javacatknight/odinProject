var array = ["rock", "paper", "sissors"];
var yourpoints = 0;
var theirpoints = 0;

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
    if (difference == 0){
        returnable = "Tie"
    }else if (difference == 1 || difference == -2){
        returnable = "You win! " + array[yours] + "beats" + array[computer];
        yourpoints++;
    } else {
        returnable = "You lose! " + array[computer] + "beats" + array[yours];
        theirpoints++;
    }
    return returnable;
}

//created an init function but not in scope -> might look at closures
const yours = document.querySelector("div#results");
const roundResults = document.createElement("div");
const runningScore = document.createElement("div");
yours.appendChild(roundResults);
yours.appendChild(runningScore);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", callback));

init();

function callback(e){ //action handler
    console.log("flag");
    roundResults.style = "white-space: pre";
    roundResults.textContent = ("You chose " + e.target.id + "\n" +(playRound(e.target.id, computerPlay())) + "\n\n\n");

    runningScore.textContent = (yourpoints + ":" + theirpoints);
    if (yourpoints == 5 || theirpoints == 5){
        runningScore.textContent = "Have a winner!";
    }
    
}





