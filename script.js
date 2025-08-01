let boxes = document.querySelectorAll(".box");
let playerScore = document.querySelector("#player-score");
let compScore = document.querySelector("#computer-score");
let msgbox = document.querySelector(".msg");

const input = ["rock","paper","scissor"];

function randomOption(input){
    return input[Math.floor(Math.random() * input.length)];
}


function getWinner(player,computer){
    if (player == "rock" && computer == "scissor" || 
        player == "paper" && computer == "rock" ||
        player == "scissor" && computer == "paper"
    ){
        return "player";
    }
    return "computer";
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        const playerChoice  = input[index];
        const compChoise = randomOption(input);
        const result = getWinner(playerChoice,compChoise);
        if(result == "player"){
            let userVal = parseInt(playerScore.innerText);
            playerScore.innerText = userVal+1;
            msgbox.innerText = "You wins, Play Again..";
        }else if(result == "computer"){
            let compVal = parseInt(compScore.innerText);
            compScore.innerText = compVal+1;
            msgbox.innerText = "Computer wins, Try Again!";
        }else{
            msgbox.innerText = "It's a draw";
        }
        msgbox.classList.remove("hide");
    })
})