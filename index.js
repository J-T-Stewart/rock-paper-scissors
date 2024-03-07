/**
 * Get a random choice from [rock, paper, scissors] for the computer player.
 * @returns {String} the computer's choice
 */
const getComputerChoice = () => {

    const choices = ['rock', 'paper', 'scissors'];
    const choice  = choices[Math.floor(Math.random() * choices.length)];

    return choice;

};

/**
 * Takes both the player and computer's choices and determines the result of the game
 * @param {String} playerChoice The player's selection
 * @param {String} computerChoice The computer's selection
 * @returns {String} the result of the game
 */
const playRound = (playerChoice, computerChoice) => {

    const gameState = {
        rock: {
            rock: "It's a Tie!  You both chose Rock",
            paper: "You Lose! Paper covers Rock",
            scissors: "You Win! Rock crushes Scissors"
        },
        paper: {
            rock: "You Win! Paper covers Rock",
            paper: "It's a Tie!  You both chose Paper",
            scissors: "You Lose! Scissors cuts Paper"
        },
        scissors: {
            rock: "You Lose! Rock crushes Scissors",
            paper: "You Win! Scissors cuts Paper",
            scissors: "It's a Tie!  You both chose Scissors"
        }
    };

    return gameState[playerChoice.toLowerCase()][computerChoice];

};

console.log('====================================');
console.log("Let's Play: ", playRound("ROCK", getComputerChoice()));
console.log('====================================');
