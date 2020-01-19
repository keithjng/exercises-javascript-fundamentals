/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  // This is your job. :)
  split = string.split(' ').length; 
  return split
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  console.log(countWords('mine yours ours theirs') === 4) 
  console.log(countWords('how are you today my friend') === 6)
  console.log(countWords('who what where when why how') === 6)
  console.log(countWords('I do not know how to do any of this') === 10)

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countWords;
