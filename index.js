(function() {

    const game = {

        state: {

            score: {

                player: 0,

                computer: 0,

            },

            choices: ['rock', 'paper', 'scissors'],

        },

        functions: {

            getComputerChoice: function() {

                return game.state.choices[Math.floor(Math.random() * game.state.choices.length)];

            },

            updateTimeline: function(message) {

                const timelineElement = document.getElementById('game-timeline');

                const newEvent = document.createElement('li');

                newEvent.innerHTML = message;

                timelineElement.insertBefore(newEvent, timelineElement.firstChild);

            },

            updateScore: function(winner) {

                game.state.score[winner]++;

                document.getElementById('player-score').innerHTML = game.state.score.player;

                document.getElementById('computer-score').innerHTML = game.state.score.computer;

            },

            handleResult: function(result) {

                if (result.winner === "tie") {

                    const message = `This round was a Tie! Both players chose ${result.winningChoice}`;

                    game.functions.updateTimeline(message);

                } else {

                    const message = `The winner was the ${result.winner}! ${result.winningChoice} beats ${result.losingChoice}`;

                    game.functions.updateScore(result.winner);
    
                    game.functions.updateTimeline(message);

                }

            },

            getResult: function(playerChoice, computerChoice) {

                if (playerChoice === computerChoice) {

                    return ({
                        winner: 'tie',
                        winningChoice: playerChoice,
                        losingChoice: computerChoice
                    });

                }

                const permutations = {
                    rock: {
                        paper: {
                            winner: "computer",
                            winningChoice: computerChoice,
                            losingChoice: playerChoice
                        },
                        scissors: {
                            winner: "player",
                            winningChoice: playerChoice,
                            losingChoice: computerChoice
                        }
                    },
                    paper: {
                        rock: {
                            winner: "player",
                            winningChoice: playerChoice,
                            losingChoice: computerChoice
                        },
                        scissors: {
                            winner: "computer",
                            winningChoice: computerChoice,
                            losingChoice: playerChoice
                        }
                    },
                    scissors: {
                        rock: {
                            winner: "computer",
                            winningChoice: computerChoice,
                            losingChoice: playerChoice
                        },
                        paper: {
                            winner: "player",
                            winningChoice: playerChoice,
                            losingChoice: computerChoice
                        },
                    }
                };

                return permutations[playerChoice][computerChoice];

            },

            playRound: function(playerChoice) {

                const computerChoice = game.functions.getComputerChoice();

                const result = game.functions.getResult(playerChoice, computerChoice);

                game.functions.handleResult(result);

            },

        },

        setEvents: function() {

            document.getElementById('select-rock').addEventListener('click', () => game.functions.playRound('rock'));

            document.getElementById('select-paper').addEventListener('click', () => game.functions.playRound('paper'));

            document.getElementById('select-scissors').addEventListener('click', () => game.functions.playRound('scissors'));

        },

        init: function() {

            game.setEvents();

        },

    };

    game.init();

})();