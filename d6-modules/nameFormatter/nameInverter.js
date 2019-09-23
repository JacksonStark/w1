const nameInverter = function(name) {
  if (name === undefined) {
    return "throw 'Error'";
  }

  if (name === "") {
    return "";
  }

  let newName = name.trim().split(" ");

  if (
    newName.length === 2 &&
    newName[0].charAt(newName[0].length - 1) !== "."
  ) {
    newName.reverse();
    newName.splice(1, 0, ", ");
    return newName.join("");
  }

  if (
    newName.length === 1 &&
    newName[0].charAt(newName[0].length - 1) === "."
  ) {
    return "";
  }

  if (
    newName.length === 2 &&
    newName[0].charAt(newName[0].length - 1) === "."
  ) {
    newName.splice(1, 0, " ");
    return newName.join("");
  }

  if (
    newName.length === 3 &&
    newName[0].charAt(newName[0].length - 1) === "."
  ) {
    let honorific = newName[0];
    newName.shift();
    newName.reverse();
    newName.splice(1, 0, ", ");
    return honorific + " " + newName.join("");
  }

  return name.trim();
};

module.exports = nameInverter;
