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
    }else if (difference == -1 || difference == -2){
        returnable = "You win! " + array[yours] + "beats" + array[computer];
    } else {
        returnable = "You lose! " + array[computer] + "beats" + array[yours];
    }
    return returnable;
}

function game(){
    for (var i = 0; i<5; i++){
        window.alert("Let's play!");
        let playerSelection = "";
        do {
            playerSelection = window.prompt("Enter your selection!").toLowerCase();
        } while (playerSelection !== array[0] && playerSelection != array[1] && playerSelection != array[2]);
        console.log("flag1"); //something wrong with the loop
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

