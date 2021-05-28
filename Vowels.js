const vowels = ["a", "e", "i", "o", "u"];

function countVowels(text) {
  let count = 0;

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  console.log(`The text contains ${count} vowel(s)`);

  return count;
}
countVowels(prompt("enter the string"));