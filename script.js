
// Create the buttons and event listeners.
// When clicked they run the game, choosing the option the payer clicks.

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

let scores;

rockButton.addEventListener('click', function () {
    scores = playRound("Rock", getComputerChoice())
    updateRounds(scores.compScore, scores.playScore);
});
paperButton.addEventListener('click', function () {
    scores = playRound("Paper", getComputerChoice())
    updateRounds(scores.compScore, scores.playScore);

});
scissorsButton.addEventListener('click', function () {
    scores = playRound("Scissors", getComputerChoice())
    updateRounds(scores.compScore, scores.playScore);

});



// DOM controls displaying the results.

const resultDiv = document.createElement('div');
resultDiv.classList.add('container');
document.body.appendChild(resultDiv);

const container = document.querySelector('.container');

// This will listen for any button clicks, and count the number of rounds, check if the round
// max has been hit, and update and display the score.

let computerScore = 0;
let playerScore = 0;

let numRounds = 1;
let maxRounds = 5; // the number of rounds to be played.
const numClicks = document.querySelectorAll('button');



function updateRounds(compScore, playScore) {
    if (numRounds >= maxRounds) {

        // This will then disable the buttons and create the play again button
        // once five rounds have been played.

        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;


        createDOMElement("h2", `Final Result:`);

        if (computerScore === playerScore) {
            createDOMElement("h3", "Draw!");
        } else if (computerScore < playerScore) {
            createDOMElement("h3", "Player victory!");
        } else {
            createDOMElement("h3", "Computer victory!");
        }

        createDOMElement("p", `Player ${playerScore} : ${computerScore} Computer`);
        const replayButton = createDOMElement("button", "Replay Game");
        
        replayButton.addEventListener('click', function () {
            window.location.reload(true);
        });


    } else {
        console.log(numRounds);

        numRounds += 1;


        computerScore += scores.compScore;
        playerScore += scores.playScore;

        createDOMElement("p", `Player ${playerScore} : ${computerScore} Computer`);
    }
}






// ---------------------------------------------------------------

function playRound(playerSelection, computerSelection) {

    // This function plays a single round of rock, paper scissors.
    // It takes player selection and computer selections as inputs,
    // and expects a string of "Rock", "Paper" or "Scissors".
    // It creates text and adds it to the DOM to display the results.

    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    createDOMElement("h3", `Player chose ${playerSelection}, Computer chose ${computerSelection}.`);


    if (player === computer) {
        createDOMElement("h3", "It's a draw!");
        let compScore = 0;
        let playScore = 0;
        return { compScore, playScore };

    } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        createDOMElement("h3", `You win! ${playerSelection} beats ${computerSelection}!`);
        let compScore = 0;
        let playScore = 1;
        return { compScore, playScore };
    } else {
        createDOMElement("h3", `You lose! ${computerSelection} beats ${playerSelection}!`);
        let compScore = 1;
        let playScore = 0;
        return { compScore, playScore };
    }

}

// ---------------------------------------------------------------


function createDOMElement(type, text = "") {
    // This function takes a 'type' (e.g. p, h3, div etc..) and adds the received text
    // to the DOM/page in that format.

    const div1 = document.createElement(`${type}`);
    div1.textContent = text;
    container.appendChild(div1);
    return div1;
}

// ---------------------------------------------------------------

function getPlayerChoice() {

    // OBSELETE IN CURRENT CODE
    // This function receives the players choice from the prompt

    console.log("Please enter one of the following options: ");
    console.log("1 - Rock");
    console.log("2 - Paper");
    console.log("3 - Scissors");
    // const choice = prompt();


    switch (choice) {
        case "1":
            return "Rock";
        case "2":
            return "Paper";
        case "3":
            return "Scissors";
        default:
            console.log("That wasn't one of the options... defaulting to Rock!");
            return "Rock";

    }

}

// ---------------------------------------------------------------

function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    return choices[Math.floor(Math.random() * choices.length)];

}

// ---------------------------------------------------------------

// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
//     let round = 1;


//     for (let i = 0; i < 5; i++) {

//         console.log(`Round ${round}`);
//         round += 1;
//         result = playRound(getPlayerChoice(), getComputerChoice());

//         switch (result) {
//             case 0:
//                 break;
//             case 1:
//                 playerScore++;
//                 break;
//             case 2:
//                 computerScore++;
//                 break;
//         }

//         if (i < 4) {
//             console.log("");
//             console.log("Current score:");
//             console.log(`Player - ${playerScore} : ${computerScore} - Computer`);
//             console.log("");
//         } else {
//             continue;
//         }
//     }

//     console.log("");
//     console.log("Final score:");
//     console.log(`Player - ${playerScore} : ${computerScore} - Computer`);
//     console.log("");
//     if (playerScore === computerScore) {
//         console.log(`${playerScore}-all draw.`);
//     } else if (playerScore > computerScore) {
//         console.log(`Player victory by ${playerScore - computerScore} point(s)!`);
//     } else {
//         console.log(`Computer victory by ${computerScore - playerScore} point(s)!`)
//     }
// }

// function playRound(playerSelection, computerSelection) {

//     player = playerSelection.toLowerCase();
//     computer = computerSelection.toLowerCase();

//     const div = document.createElement('h3');
//     div.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}.`;
//     container.appendChild(div);



//     if (player === computer) {
//         const div1 = document.createElement('h3');
//         div1.textContent = "It's a draw!";
//         container.appendChild(div1);
//         // return 0;
//     } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
//         const div1 = document.createElement('h3');
//         div1.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
//         container.appendChild(div1);
//         // return 1;
//     } else {
//         const div1 = document.createElement('h3');
//         div1.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
//         container.appendChild(div1);
//         // return 2;
//     }
//     console.log("");

// }
