/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  // This is your job. :).
  var NF = 9 / 5
  let fahrenheit = temp * NF + 32
  return fahrenheit
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  console.log(celsiusToFahrenheit(0) === 32)
  console.log(celsiusToFahrenheit(10) === 50)
  console.log(celsiusToFahrenheit(32) === 89.6)
  console.log(celsiusToFahrenheit(-32) === -25.6)
  console.log(celsiusToFahrenheit(40) === 104)

  // Your sanity checks go here.
}

module.exports = celsiusToFahrenheit;
