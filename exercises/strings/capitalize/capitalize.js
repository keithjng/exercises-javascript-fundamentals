/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalize
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  // This is your job. :)
  let i = string.length
  let str1 = string
  var str2 = str1.slice(0, 1)
  let cap = str2.toUpperCase() + str1.slice (1, i)
  return cap
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  console.log(capitalize('hola') === 'Hola');
  console.log(capitalize('holland') === 'Holland');
  console.log(capitalize('wither') === 'Wither');
  console.log(capitalize('umami') === 'Umami');
  console.log(capitalize('ramen') === 'Ramen');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
