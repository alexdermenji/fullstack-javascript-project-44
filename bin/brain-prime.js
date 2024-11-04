#!/usr/bin/env node

import runGame from '../src/index.js';
import primeNumberGame from '../src/prime-number.js';

console.log('Welcome to the Brain Games!');

const [description, generateRound] = primeNumberGame();
runGame(description, generateRound);
