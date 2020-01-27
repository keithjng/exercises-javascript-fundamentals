/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  // This is your job. :)
  for (let i = 0; i < string.length; i++){ 
    if (string.slice(i, i + 1) === target){ 
      string = string.slice (0, i) + replaceWith + string.slice(i + 1);
    }
  }
  return string;
}
if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  console.log(replaceCharacter('done', 'o', 'i') === 'dine');
  console.log(replaceCharacter('The pool is cool', 'c', 'p') === 'The pool is pool');
  console.log(replaceCharacter('blackbear', 'b', 'p') === 'plackpear');
  console.log(replaceCharacter('this is where the magic happens', 'h', 'w') === 'twis is wwere twe magic wappens');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacter;
