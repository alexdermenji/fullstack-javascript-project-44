import { gcd, generateRandomNumber } from './utils.js';

export default function gcdGame() {
  const description = 'Find the greatest common divisor of given numbers.';
  const generateRound = () => {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const correctAnswer = gcd(number1, number2);
    const question = `${number1} ${number2}`;
    return [question, correctAnswer.toString()];
  };
  return [description, generateRound];
}
