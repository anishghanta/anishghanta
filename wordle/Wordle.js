// possible words
const words = ["apple", "banana", "cherry", "grape", "kiwi", "lemon", "orange", "peach", "pear", "plum"];

const secretWord = words[Math.floor(Math.random() * words.length)];

// Initialize the wordle with underscores
let wordle = "";
for (let i = 0; i < secretWord.length; i++) {
	wordle += "_";
}

document.getElementById("wordle").innerHTML = wordle;
function checkGuess() {
	const guess = document.getElementById("guess").value.toLowerCase();
	if (guess.length !== 5) {
		alert("Please enter a five-letter word.");
		return;
	}
	let newWordle = "";
	let correctLetters = 0;
	for (let i = 0; i < secretWord.length; i++) {
		if (secretWord[i] === guess[i]) {
			newWordle += guess[i];
			correctLetters++;
		} else if (secretWord.includes(guess[i])) {
			newWordle += "_";
		} else {
			newWordle += wordle[i];
		}
	}
	if (correctLetters === 5) {
		document.getElementById("result").innerHTML = "You win!";
	} else {
		document.getElementById("result").innerHTML = `${correctLetters} correct letters`;
		wordle = newWordle;
		document.getElementById("wordle").innerHTML = wordle;
	}
	document.getElementById("guess").value = "";
}
