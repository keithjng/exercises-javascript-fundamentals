/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  // This is your job. :)
  let longestSoFar = array[0];
  
  for (i = 0; i < array.length; i++) {
    if (longestSoFar.length < array[i].length) {
      longestSoFar = array[i];
    }
  }
  return longestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');

  console.log(longest(['yes', 'no', 'maybe']) === 'maybe')
  console.log(longest(['we', 'do', 'not', 'know']) === 'know')  
  console.log(longest(['chicken', 'skeleton', 'slime']) === 'skeleton')
  console.log(longest(['Steve', 'Alex', 'Notch', 'Villager']) === 'Villager')

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
