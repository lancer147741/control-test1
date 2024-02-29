#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

function generateRandomNumbers() {
    return [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
    ];
}

function findSCM(numbers) {
    const maxNumber = Math.max(...numbers);
    let scm = maxNumber;
    while (true) {
        if (numbers.every(number => scm % number === 0)) {
            return scm;
        }
        scm += maxNumber;
    }
}

export default function playSCMGame() {
    greet();
    console.log('Find the smallest common multiple of given numbers.');

    const numbers = generateRandomNumbers();
    console.log(`Numbers: ${numbers.join(', ')}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = findSCM(numbers);

    if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`Wrong! Correct answer is ${correctAnswer}.`);
    }
}