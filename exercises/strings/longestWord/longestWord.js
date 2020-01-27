/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)
  var split = string.split(' '); //breaks by spaces 
  var num = 0;
    for (var i = 0; i < split.length; i++){ 
      if (num < split[i].length){
        num = split[i].length;
        var longest = split[i];
      }
    } 
    return longest
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  
  console.log(longestWord('wither creeper chicken enderdragon') === 'enderdragon');
  console.log(longestWord('lost frequencies is nice to listen to') === 'frequencies');
  console.log(longestWord('I ordered ramen today') === 'ordered');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
