#!/usr/bin/env node

import calc from '../src/calc.js';
import runGame from '../src/index.js';

console.log('Welcome to the Brain Games!');
const [description, generateRound] = calc();
runGame(description, generateRound);
