function capitalize(string) {
  let capitalizedString = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    capitalizedString += string[i];
  }
  return capitalizedString;
}

function reverseString(string, index = string.length - 1) {
  if (index < 0) {
    return "";
  }
  return string[index] + reverseString(string, index - 1);
}

const calculator = {
  add: (a, b) => {
    return typeof a !== "number" || typeof b !== "number" ? null : a + b;
  },
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    return b === 0 ? null : a / b;
  },
};

module.exports = { capitalize, reverseString, calculator };
