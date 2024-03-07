const choices = ['rock', 'paper', 'scissors'];

/**
 * Check to see if the users input is a valid rock paper scissors choice.
 * @param {String} input The users input to validate
 * @returns {Boolean} wether the input is valid or not
 */
const validateUserInput = (input) => {

    return choices.includes(input.toLowerCase());

};

/**
 * Get a random choice from [rock, paper, scissors] for the computer player.
 * @returns {String} the computer's choice
 */
const getComputerChoice = () => {

    return choices[Math.floor(Math.random() * choices.length)];

};

/**
 * Takes both the player and computer's choices and determines the result of the game
 * @param {String} playerChoice The player's selection
 * @param {String} computerChoice The computer's selection
 * @returns {String} the result of the game
 */
const playRound = (playerChoice, computerChoice) => {

    if (!choices.includes(playerChoice)) {
        console.log("Please choose a valid option [Rock, Paper, Scissors]");
        return 'error';
    }

    const gameState = {
        rock: {
            rock: {
                winner: "None",
                message: "It's a Tie!  You both chose Rock"
            },
            paper: {
                winner: "Computer",
                message: "You Lose! Paper covers Rock"
            },
            scissors: {
                winner: "Player",
                message: "You Win! Rock crushes Scissors"
            }
        },
        paper: {
            rock: {
                winner: "Player",
                message: "You Win! Paper covers Rock"
            },
            paper: {
                winner: "None",
                message: "It's a Tie!  You both chose Paper"
            },
            scissors: {
                winner: "Computer",
                message: "You Lose! Scissors cuts Paper"
            }
        },
        scissors: {
            rock: {
                winner: "Computer",
                message: "You Lose! Rock crushes Scissors"
            },
            paper: {
                winner: "Player",
                message: "You Win! Scissors cuts Paper"
            },
            scissors: {
                winner: "None",
                message: "It's a Tie!  You both chose Scissors"
            }
        }
    };

    return gameState[playerChoice.toLowerCase()][computerChoice];

};

/**
 * Starts a best 3/5 game of rock paper scissors, waits for user input and then generates a random selection for the computer.
 */
const playGame = () => {

    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {

        const playerChoice = prompt("Choose Rock, Paper or Scissors!");

        if (!validateUserInput(playerChoice)) continue;

        const roundResult = playRound(playerChoice, getComputerChoice());

        console.log("Round Result: ", roundResult.message);

        (roundResult.winner === 'Player') ? playerWins++ : computerWins++;

        console.log(`The Current Score: Player: ${playerWins} to Computer: ${computerWins}`);

    }

    const winner = (playerWins === 3) ? 'Player' : 'Computer';

    console.log('====================================');
    console.log(`We have a winner: ${winner}`);
    console.log('====================================');

};

playGame();