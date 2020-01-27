/**
 * Given two non-negative integers, `n` and `b`, return `true` of `n` is a power of `b`
 * and `false` otherwise.
 *
 * A number is a `n` power of `b` if it can be written as `b**k` for some positive integer `k`,
 * where "`**`" represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `9` is not a power of `2` since there's no integer `k` such that `9 === 2**k`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} n - The number
 * @param {number} b - The base
 * @returns {boolean} True if the number is a power of the base, false otherwise.
 */
function isPowerOf(n, b) {
  // Your code here
  // Remember, you can assume that num is a positive integer.
  do 
    b = b ** 2
  while (n >= b);
  
  if (b > n)
    b / b

  if (b = n)
    return true
  else
    return false
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOf:');

  console.log(isPowerOf(2, 2) === true)   
  console.log(isPowerOf(3, 3) === true) 
  console.log(isPowerOf(10, 2) === false) 
  console.log(isPowerOf(10, 3) === false) 
  console.log(isPowerOf(8, 2) === true) 
}

module.exports = isPowerOf;
