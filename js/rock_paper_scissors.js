// variable to keep track of score
let playerscore = 0;
let computerscore = 0;
//computer play function
function computerplay() {
	let random_number = math.floor(Math.random() * 3);
	if (random_number === 0) {
		return 'rock';
	} else if (random_number === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}
//plays a round to return a winner to
function playerRound(playerSelction, computerSelection) {
	let message = '';

	function playerWin(announceWinner) {
		message = announeWinner;
		playerScore += 1;
		return message;
	}
}

function computerWin(announceWinner) {
	message = announceWinner;
	computerScore += 1;
	return message;
}
// statments to compare winners to
if (playerSelction === computerSelection) {
	message = "Tie, play again";
	return message;
} else if (playerSelction === 'rock' && computerSelection === 'paper') {
	computerWin('You lose, paper beats rock');
} else if (playerSelction === 'rock' && computerSelection === 'scissors') {
	playerWin('You win, rock beats scissors');
} else if (playerSelction === 'paper' && computerSelection === 'rock') {
	playerWin('You win. paper beats rock');
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
	computerWin('You lose. Scissors beats paper');
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
	computerWin('You lose. Rock beats scissors');
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
	playerWin('You win. Scissors beats paper');
} else {
	message = 'Something went wrong';
	return message;
}
console.log(`${message}. Score: You ${playerScore}-${computerScore} The computer.`);
// game function, Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
	let counter = 0;
	do {
		console.log(playRound(userPlay(), computerPlay()));
		if (playerScore === 3) {
			console.log(`You've won the game! Final Score: You ${playerScore}-${computerScore} The computer.`);
			counter = 1;
		} else if (computerScore === 3) {
			console.log(`You've lost the game. Final Score: You ${playerScore}-${computerScore} The computer.`);
			counter = 1;
		}
	} while (counter < 1);
}
game();