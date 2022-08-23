
game();

function playRound(playerSelection, computerSelection) {

    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}.`)
    console.log("");

    if (player === computer) {
        console.log("It's a draw!");
        return 0;
    } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return 2;
    }
    console.log("");

}

function getPlayerChoice() {
    console.log("Please enter one of the following options: ");
    console.log("1 - Rock");
    console.log("2 - Paper");
    console.log("3 - Scissors");
    const choice = prompt();


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

function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    return choices[Math.floor(Math.random() * choices.length)];

}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;


    for (let i = 0; i < 5; i++) {

        console.log(`Round ${round}`);
        round += 1;
        result = playRound(getPlayerChoice(), getComputerChoice());

        switch (result) {
            case 0:
                break;
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
        }

        if (i < 4) {
            console.log("");
            console.log("Current score:");
            console.log(`Player - ${playerScore} : ${computerScore} - Computer`);
            console.log("");
        } else {
            continue;
        }
    }

    console.log("");
    console.log("Final score:");
    console.log(`Player - ${playerScore} : ${computerScore} - Computer`);
    console.log("");
    if (playerScore === computerScore) {
        console.log(`${playerScore}-all draw.`);
    } else if (playerScore > computerScore) {
        console.log(`Player victory by ${playerScore - computerScore} point(s)!`);
    } else {
        console.log(`Computer victory by ${computerScore - playerScore} point(s)!`)
    }

}