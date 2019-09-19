// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, func) {
  names.forEach(name => {
    let index = names.indexOf(name);
    if (name === "Waldo") {
      func(index);   // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => {
  console.log('Waldo is located at: index', index);
});