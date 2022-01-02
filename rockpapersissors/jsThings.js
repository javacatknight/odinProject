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
/*
?revert to [] whenever .won't work.

elementName.querySelector("div.className");
elementName.querySelectorAll(); -> returns a nodelist, use Array.from(nodelist)

//?element creation
const tagName = document.createElement('tagName', [options]);
variable tagnName is reference

//?Modification: .setAttribute(type, ['value'])
tagName.setAttribute('style', 'color: blue; background: white'; font: blue);    
tagName.setAttribute('id', 'theDiv');
tagName.setAttribute('class', 'lmao'); //*tagName.classList.add/remove/toggle('thisClass');
tagName.getAttribute('id');
tagName.removeAttribute('id');
//*text content
tagName.textContent = "camelCase = BASED"; //* note that a text node is created and inserted within the element; makes sense, text isn't a property ex. div cant have text
tagName.innerHTML "<tag></tag>";

//?element insertion
parentNode.appendChild(childNode) appends childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

//?removal
parentNode.removeChild(child) -> returns reference to child
*/



