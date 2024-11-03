import { calculate, generateRandomNumber } from './utils.js';

const operators = ['+', '-', '*'];

export default function calc() {
  const description = 'What is the result of the expression?';
  const generateRound = () => {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const correctAnswer = calculate(number1, number2, operator);
    const question = `${number1} ${operator} ${number2}`;
    return [question, correctAnswer.toString()];
  };
  return [description, generateRound];
}
