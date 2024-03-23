// Write your solution here!
// Global 'cats' array definition
const cats = ["Milo", "Otis", "Garfield"];

// Destructive method to append a cat to the end of the 'cats' array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructive method to prepend a cat to the beginning of the 'cats' array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructive method to remove the last cat from the 'cats' array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructive method to remove the first cat from the 'cats' array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive method to append a cat to the end of the 'cats' array and return a new array
function appendCat(name) {
  return [...cats, name];
}

// Non-destructive method to prepend a cat to the beginning of the 'cats' array and return a new array
function prependCat(name) {
  return [name, ...cats];
}

// Non-destructive method to remove the last cat from the 'cats' array and return a new array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Non-destructive method to remove the first cat from the 'cats' array and return a new array
function removeFirstCat() {
  return cats.slice(1);
}
