// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(element => {
    let name = element;
    if (name === "Waldo") {
      found(name, names);   // execute callback
    }
  });
};

const actionWhenFound = function(name, names) {

  console.log(`Found ${name}!`);
}
;
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);