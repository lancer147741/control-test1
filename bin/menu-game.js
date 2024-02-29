#!/usr/bin/env node

import readlineSync from 'readline-sync';
import playSCMGame from '../bin/brain-scm.js';
import playProgressionGame from '../bin/brain-progression.js';

console.log('Choose the game:');
console.log('1. Find the smallest common multiple');
console.log('2. Guess the missing number in the progression');
const choice = readlineSync.question('Enter the number of the game you want to play: ');

switch (choice) {
    case '1':
        playSCMGame();
        break;
    case '2':
        playProgressionGame();
        break;
    default:
        console.log('Invalid choice!');
}