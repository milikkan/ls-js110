// Write a function that takes no arguments and returns a string that contains a UUID.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string.
// The value is typically broken into 5 sections in an 8-4-4-4-12 pattern,
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

const UUID_PATTERN = `${'x'.repeat(8)}-${'x'.repeat(4)}-${'x'.repeat(4)}-${'x'.repeat(4)}-${'x'.repeat(12)}`;
const HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function getRandomChar() {
  let index = Math.floor(Math.random() * HEX_CHARS.length);
  return HEX_CHARS[index];
}

function generateUUID() {
  return UUID_PATTERN.split('').map(char => {
    if (char === '-') return char;
    return getRandomChar();
  }).join('');
}

console.log(generateUUID());