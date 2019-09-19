const reverse = (words) => {
  let newWords = [];
  let reverseOrder = [];

  for (let a = 2; a < words.length; a++) {
    newWords.push(words[a]);
  }

  for (let i = 0; i < newWords.length; i++) {
    for (let n = newWords[i].length - 1; n >= 0; n--) {
      reverseOrder.push(newWords[i].charAt(n));
    }
    if (i !== newWords.length - 1) {
      reverseOrder.push('\n');
    }
  }
  let finish = reverseOrder.toString();
  let example = finish.replace(/,/g, '');

  console.log(example);

};

reverse(process.argv);


