/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  // This is your job. :)
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + Number(array[i])
  }
  console.log(sum)
  return sum
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  console.log(sum(['1', '2', '3', '4']) === 10)
  console.log(sum([1, 2, 3, 4]) === 10)
  console.log(sum([10, 20, 30, 40]) === 100)
  console.log(sum([5, 10, 15, 20]) === 50)
  console.log(sum([3, 6, 9, 12]) === 30)
  console.log(sum([4, 6, 10, 5]) === 25)  
  console.log(sum([3, 5, 10, 2]) === 20)
  console.log(sum([11, 19, 10, 7]) === 47)

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
