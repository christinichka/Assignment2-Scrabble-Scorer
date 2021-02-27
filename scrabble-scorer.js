// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

let vowels = ['A', 'E', 'I', 'O', 'U'];

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = "";

function initialPrompt(word) {
  console.log("Let's play some scrabble!" + "\n");
  word = input.question("Enter a word to score: ");
  return oldScrabbleScorer(word)
};
console.log(initialPrompt(word));


// Function takes a word as a parameter and returns a numerical score where each letter is worth 1 point
let simpleScore = function(word) {
  let score = 0
  for (let i = 0; i < word.length; i++) {
    score += 1;
  }
  return score;
}
console.log(simpleScore(initialPrompt) + "\n");



// Function the takes a word as a parameter and returns a score where each consonant is worth 1 point and each vowel is worth 3 points
let vowelBonusScore = function(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === vowels) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
}
console.log(vowelBonusScore(initialPrompt) + "\n");



let scrabbleScore;


// Organize all three scoring options into an array called scoringAlgorithms
  // populate with three keys for each scoring object: name, description, scorerFunction
const scoringAlgorithms = [];


function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

