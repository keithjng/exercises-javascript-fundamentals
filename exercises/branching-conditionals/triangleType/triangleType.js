/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @returns {boolean} returns proper identification of triangle 
 */
function triangleType(a, b, c) {
  // This is your job. :)
  if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
    let type = 'right'
    return type
  }
  else if (a + b <= c || a + c <= b || b + c <= a) {
    let type = 'invalid'
    return type
  }
  else if (a * a + b * b < c * c || a * a + c * c < b * b || b * b + c * c < a * a) {
    let type = 'obtuse'
    return type
  }
  else if (a * a + b * b > c * c || a * a + c * c > b * b || b * b + c * c > a * a) {
    let type = 'acute'
    return type  
  }
  //I haven't had a scenario in which this condition is reached, but it's here just in case some numbers are weird of the input isn't numerical
  else {
    let type = 'invalid'
    return type
  }
}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');

  console.log(triangleType(3, 4, 5) === 'right') 
  console.log(triangleType(4, 3, 5) === 'right')
  console.log(triangleType(24, 25, 7) === 'right')
  console.log(triangleType(1, 1, 1) === 'acute')
  console.log(triangleType(3, 3, 4) === 'acute')
  console.log(triangleType(12, 15, 8) === 'obtuse')
  console.log(triangleType(3, 4, 6) === 'obtuse')
  console.log(triangleType(1, 1, 2) === 'invalid')
  console.log(triangleType(1, 1, 3) === 'invalid')
  console.log(triangleType(5, 15, 12) === 'obtuse')
  console.log(triangleType(8, 9, 7) === 'acute')
  console.log(triangleType(6, 8, 10) === 'right')
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = triangleType;
