let userScore=0;
let compScore=0; 

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const gencompChoice=() =>{
     const options=["rock", "paper", "scissor"];
     const randidx=Math.floor(Math.random() *3);
     return options[randidx];
};

const drawgame=() =>{
    
    msg.innerText="GAME WAS DRAW";
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userwin, userChoice, compChoice) =>{
    if(userwin){
       userScore++;
       userScorePara.innerText=userScore;
        msg.innerText=`YOU WIN  ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOST ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
};
const playgame=(userChoice) =>{
    console.log("userChoice=", userChoice);
    const compChoice= gencompChoice();
    console.log("compChoice=", compChoice);
    if(userChoice === compChoice){
        drawgame();

    }else{
        let userwin =true;
        if(userChoice==="rock"){
            userwin=compChoice=== "paper" ? false:true;
        } else if(userChoice==="paper"){
            userwin=compChoice==="scissor" ? false:true;
        } else{
            userwin=compChoice==="rock" ? false:true;
        }
        showWinner(userwin, userChoice, compChoice);
        
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    });
});

