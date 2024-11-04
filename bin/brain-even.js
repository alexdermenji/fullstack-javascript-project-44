#!/usr/bin/env node

import guessNumber from '../src/guess-number.js';
import runGame from '../src/index.js';

console.log('Welcome to the Brain Games!');

const [description, generateRound] = guessNumber();
runGame(description, generateRound);
