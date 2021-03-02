// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

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

// Prompt user for a word to be scored
function initialPrompt() {
  word = input.question (`Let's play some scrabble!\n\nEnter a word to score: `);
  return oldScrabbleScorer(word);
}
// console.log(initialPrompt(word));


// Function takes a word as a parameter and returns a numerical score where each letter is worth 1 point
function simpleScore(word) {
  word = word.toUpperCase();
  let score = word.length;
  return score;
}

// Function the takes a word as a parameter and returns a score where each consonant is worth 1 point and each vowel is worth 3 points
function vowelBonusScore(word) {
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
}


function scrabbleScore(word) {
  word = word.toLowerCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score+= newPointStructure[word[i]];
  }
  return score;
}

// Individual Scoring Objects to hold the information about each scoring function
let simpleScoreObj = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoringFunction: simpleScore
}

let vowelBonusObj = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScore
}

let scrabbleObj = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
}

// Array to organize the three scoring objects and their keys (name, description, scoringFunction)
const scoringAlgorithms = [simpleScoreObj, vowelBonusObj, scrabbleObj];

// Let the user select which scoring algorithm to use when program scores a word.
function scorerPrompt() {
  let whichScorer = input.question(`Which scoring algorithm would you like to use?\n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: `);
  if (whichScorer == 0) {
    console.log(`Score for '${word}' : ${scoringAlgorithms[0].scoringFunction(word)}`)
  } else if (whichScorer == 1) {
    console.log(`Score for '${word}' : ${scoringAlgorithms[1].scoringFunction(word)}`)
  } else if (whichScorer == 2) {
    console.log(`Score for '${word}' : ${scoringAlgorithms[2].scoringFunction(word)}`)
  } else {
    initialPrompt();
  }
  return whichScorer;
}

// Use the oldPointStructure to write a new function so that a single search will identify the point value for each letter.
function transform(obj) {
  // create an array to hold the point/alphabet objects
  let newPointObj = {};
  for (key in obj) {
    for (let i = 0; i < obj[key].length; i++) {
      let letterItem = obj[key][i];
      letterItem = letterItem.toLowerCase();
      newPointObj[`${letterItem}`] = Number(key); 
    }
  }
  return newPointObj;
}

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;

// console.log("letter a: ", newPointStructure.a);
// console.log("letter j: ", newPointStructure.j);
// console.log("letter z: ", newPointStructure["z"]);


function runProgram() {
   initialPrompt();
   scorerPrompt();
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
