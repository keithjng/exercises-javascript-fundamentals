/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  // This is your job. :)
  let shortestSoFar = array[0];
  
  for (i = 0; i < array.length; i++) {
    if (shortestSoFar.length > array[i].length) {
      shortestSoFar = array[i];
    }
  }
  return shortestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');
  
  console.log(shortest(['yes', 'no', 'maybe']) === 'no')
  console.log(shortest(['we', 'might', 'not', 'know']) === 'we')  
  console.log(shortest(['chicken', 'skeleton', 'slime']) === 'slime')
  console.log(shortest(['Steve', 'Alex', 'Notch', 'Villager']) === 'Alex')

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortest;
