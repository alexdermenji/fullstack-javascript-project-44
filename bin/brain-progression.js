#!/usr/bin/env node

import runGame from '../src/index.js';
import progressionGame from '../src/progression.js';

console.log('Welcome to the Brain Games!');

const [description, generateRound] = progressionGame();
runGame(description, generateRound);
