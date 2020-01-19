/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)
  var split = string.split(' '); 
  var num = string.length; 
    for (var i = 0; i < split.length; i++){ 
      if (num > split[i].length){
        num = split[i].length;
        var shortest = split[i];
      }
    } 
    return shortest
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  console.log(shortestWord('wither creeper chicken enderdragon') === 'wither');
  console.log(shortestWord('lost frequencies within worldviews') === 'lost');
  console.log(shortestWord('I ordered ramen today') === 'I'); 
  console.log(shortestWord('Tom Cruise in Mission Impossible') === 'in')
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;
