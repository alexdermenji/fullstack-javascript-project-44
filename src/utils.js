export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// eslint-disable-next-line max-len
export const generateRandomNumberFromRange = (min = 5, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

export const gcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

export const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
