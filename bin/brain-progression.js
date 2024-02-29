#!/usr/bin / env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

function generateProgression() {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = 10;
    return Array.from({ length }, (_, i) => start + i * step);
}

function hideNumber(progression) {
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return { progression, hiddenValue };
}

export default function playProgressionGame() {
    greet();
    console.log('What number is missing in the progression?');

    const progression = generateProgression();
    const { progression: progressionWithHidden, hiddenValue } = hideNumber([...progression]);

    console.log(`Progression: ${progressionWithHidden.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === hiddenValue) {
        console.log('Correct!');
    } else {
        console.log(`Wrong! Correct answer is ${hiddenValue}.`);
    }
}