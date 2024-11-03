import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export default function guessNumber() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = generateRandomNumber();
    const isEven = number % 2 === 0;
    const answer = readlineSync.question(`Question: ${number} `);
    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven ? 'yes' : 'no'}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
}
