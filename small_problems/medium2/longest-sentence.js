/* 
Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

P:
- i: a string
- o: a string
- r/e:
  - detect the longest sentence
    - sentence: a string that ends with . ! ?
    - word: string separated by spaces or tabs
  - print it and its word count
D: array

A:
- high-level:
  - detect all senctences and store in an array. Count each one's word and return the longest.
- step-by-step:
  - declare an array `sentences` and init to `[]`
  - detect sentences and assign to `sentences` array
  - declare a longestSentence variable and init to empty str
  - declare a maxCount variable and init to 0
  - iterate through the sentences array
    - count words
    - if count is greater than maxCount
      - reassing maxCount
      - assign current sentence to longestSentence
  - return longest sentence and its word count

*/

function longestSentence(str) {
  let sentences = findSentences(str);
  
  let longestSentence = '';
  let maxCount = 0;

  sentences.forEach(sentence => {
    let currentWordCount = countWords(sentence);
    if (currentWordCount > maxCount) {
      longestSentence = sentence;
      maxCount = currentWordCount;
    }
  });

  console.log(longestSentence);
  console.log(`\nThe longest sentence has ${maxCount} words.`);
}

function findSentences(str) {
  let result = [];
  let start = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str.charAt(idx);
    if (['.', '!', '?'].includes(currentChar)) {
      result.push(str.slice(start, idx + 1));
      start = idx + 1;
    }
  }
  return result.map(sentence => sentence.trim());
}

function countWords(sentence) {
  let words = sentence.split(' ');
  return words.filter(word => word.length > 0).length;
}

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.
console.log('-------');
longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
console.log('-------');

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.
console.log('-------');

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.