import { generateProgression, generateRandomNumberFromRange } from './utils.js';

export default function progressionGame() {
  const description = 'What number is missing in the progression?';
  const generateRound = () => {
    const start = generateRandomNumberFromRange();
    const length = generateRandomNumberFromRange(start, 10);
    const step = generateRandomNumberFromRange(1, 10);
    console.log(step);
    const progression = generateProgression(start, step, length);
    const hiddenElementIndex = generateRandomNumberFromRange(0, length - 1);
    const correctAnswer = progression[hiddenElementIndex];
    const question = progression.map((element, index) => (index === hiddenElementIndex ? '..' : element)).join(' ');
    return [question, correctAnswer.toString()];
  };
  return [description, generateRound];
}
