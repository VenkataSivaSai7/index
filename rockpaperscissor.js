let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //getting input choice from the user
const userScorePara = document.querySelector("#you"); //updating the user score
const compScorePara = document.querySelector("#computer"); //updating the computer score
const msg = document.querySelector("#msg"); //updation of message

const getComputerChoice = ()=> {
    let arr = ["rock","paper","scissors"];
    //computer will select one of the option among the strings in the arr..by using the Math.random() function
    //basically the Math.random() generates 0 - 1 values and if you multiply with 3 you will get 0 - to 2 respectively
    //Math.floor() is used to remove the decimal part.. 
    const retIdx = Math.floor(Math.random() * 3);
    return arr[retIdx]; //this will return the computer generated value..
};

const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#72BAA9"
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#FF0000"
    }
};

const drawGame = ()=> {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "black"
};

const playGame = (userChoice)=> {
    const compChoice = getComputerChoice();
    let userWin = true;
    //GAME LOGIC
    if(userChoice === compChoice) {
        drawGame();
        return ; //when the choices are equal call the drawGame function and exit from the loop for that valid choice..!
    }
    else {
        if(userChoice === "rock") {
            //scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors") {
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
    }

    showWinner(userWin,userChoice,compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); //Function call..
    });
});

