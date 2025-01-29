let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user");
const comppara = document.querySelector("#comp");


//This is for accessing the moves of user
choices.forEach((choice) =>{
    choice.addEventListener("click",( ) =>{
       const userchoice = choice.getAttribute("id");
       console.log("user choice =",userchoice);
       playgame(userchoice);
    });
   });
   

//This is for accessing the moves of computer
const genCompChoice = () => {
    const options = ["stone" , "paper" , "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};



//This is for comparing moves of user and computer
const playgame = (userchoice) =>{
    const compchoice = genCompChoice();
    console.log(compchoice);
    
    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userwin=true;

        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="stone"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

};


//If both moves are equal
const drawGame=()=>{
    msg.innerText="Game Draw Please Play your next move.";
    msg.style.backgroundColor="blue";
};



//Show the winner
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText=`You win ${userchoice} beats ${compchoice} !`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        msg.innerText=`You lose ${compchoice} beats your ${userchoice} !`;
        msg.style.backgroundColor="red";
    }
};
