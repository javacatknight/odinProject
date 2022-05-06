//The classic rock-paper-scissors game. Play five rounds against the computer.

//Global variables.
var array = ["rock", "paper", "scissors"];
var yourpoints = 0;
var theirpoints = 0;

//Selects and returns the option the computer plays.
function computerPlay (){
    var x = parseInt((3*Math.random()));
    return(array[x]);
}

//Plays a single round. Returns a string specifying the winner of the round.
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

//DOM MANIPULATION:
const yours = document.querySelector("div#results"); //Div storing results
//One div displays the results of the round, another div displays the running score (up to five rounds).
const roundResults = document.createElement("div");
const runningScore = document.createElement("div");
yours.appendChild(roundResults);
yours.appendChild(runningScore);

//Create buttons for each of the 3 options playable by user.
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", callback));

//Practice callback function. Action handler that displays the result of the round.
function callback(e){ 
    roundResults.style = "white-space: pre";
    roundResults.textContent = ("You chose " + e.target.id + "\n" +(playRound(e.target.id, computerPlay())) + "\n\n\n");

    runningScore.textContent = (yourpoints + ":" + theirpoints);
    if (yourpoints == 5 || theirpoints == 5){
        runningScore.textContent = "Have a winner!";
    }
    
}





