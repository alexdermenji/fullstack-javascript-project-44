import { generateRandomNumber } from './utils.js';

export default function guessNumber() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRound = () => {
    const number = generateRandomNumber();
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return [number.toString(), correctAnswer];
  };
  return [description, generateRound];
}
