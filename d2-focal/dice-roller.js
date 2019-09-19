let input = process.argv[2];

const rollDice = (amount) => {
  let results = '';
  for (let i = 1; i <= amount; i++) {
    console.log(i);
    if (i === amount) {
      let diceRoll = Math.ceil(Math.random() * 6);
      results += diceRoll;
      console.log('last');
    } else {
      let diceRoll = Math.ceil(Math.random() * 6);
      results += diceRoll;
      results += ', ';
    }
  }
  console.log(`Rolled ${amount} dice: ${results}`);
};

rollDice(parseInt(input));