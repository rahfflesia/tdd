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

function analyzeArray(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

function isUpper(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

function find(element, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      return true;
    }
  }
  return false;
}

function getNewAlphabet(offset) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newAlphabet = "";
  let aux = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (i + offset < alphabet.length) {
      newAlphabet += alphabet[i + offset];
    } else {
      newAlphabet += alphabet[aux];
      aux++;
    }
  }
  return offset > alphabet.length - 1 ? null : newAlphabet;
}

function caesarCipher(string, offset) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newAlphabet = getNewAlphabet(offset);
  let lowerCaseString = string.toLowerCase();

  if (newAlphabet === null) return null;

  let cipherText = "";
  for (let i = 0; i < lowerCaseString.length; i++) {
    const charPos = [...alphabet].indexOf(lowerCaseString[i]);
    if (!find(lowerCaseString[i], newAlphabet)) {
      cipherText += lowerCaseString[i];
    } else {
      cipherText += newAlphabet[charPos];
    }
  }

  let caseCipher = "";
  for (let i = 0; i < string.length; i++) {
    isUpper(string[i])
      ? (caseCipher += cipherText[i].toUpperCase())
      : (caseCipher += cipherText[i]);
  }

  return caseCipher;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
};
