/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).
  var NF = 5 / 9
  let sub = temp - 32
  let celsius = sub * NF

  return celsius
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');
  
  console.log(fahrenheitToCelsius(32) === 0)
  console.log(fahrenheitToCelsius(50) === 10)
  console.log(fahrenheitToCelsius(89.6) === 32)
  console.log(fahrenheitToCelsius(-25.6) === -32)
  console.log(fahrenheitToCelsius(104) === 40)

  // Your sanity checks go here.
}

module.exports = fahrenheitToCelsius;
