#!/usr/bin/env node

import runGame from '../src/index.js';
import gcdGame from '../src/gcd.js';

console.log('Welcome to the Brain Games!');

const [description, generateRound] = gcdGame();
runGame(description, generateRound);
