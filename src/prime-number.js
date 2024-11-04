import { generateRandomNumberFromRange } from './utils.js';

export default function primeNumberGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateRound = () => {
    const randomNumber = generateRandomNumberFromRange(1, 100);
    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer.toString()];
  };
  return [description, generateRound];
}
