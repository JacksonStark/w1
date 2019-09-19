let ogWords = process.argv.slice(2);
let pigLatinWords = [];

// The translator...
const translate = (word) => {
  return word.slice(1, word.length) + word[0] + "ay";
};

// Iterates through each WORD of input...
for (let i = 0; i < ogWords.length; i++) {
  console.log(translate(ogWords[i]));
  pigLatinWords.push(translate(ogWords[i]));
}

console.log(pigLatinWords.join(' '));

