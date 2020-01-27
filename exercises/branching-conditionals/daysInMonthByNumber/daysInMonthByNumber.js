/**
 * Given a month (represented as a number between 1 and 12), return the number
 * of days in that month.
 *
 * For example, January is an inpt of 1, February is an input of 2, March is an
 * input of 3, and so on.
 *
 * Assume February has 29 days (no leap years).
 *
 * @example
 * daysInMonthByNumber(1); // => 31
 * daysInMonthByNumber(9); // => 30
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */
function daysInMonthByNumber(monthNum) {
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    throw new Error(`Expected a month number from 1-12, received: ${monthNum}`);
  }
  //I left this here because I want to figure out why I couldn't compare the integer to the array later
  //let thirOne = ['1', '3', '5', '7', '8', '10', '12'];
  //let belThirOne = ['2', '4', '6', '9', '11'];
  //let month = Array.from(monthNum)
  //if (month = thirOne) {
  //  console.log(month) 
  //  return 31
  //}
  //else if (month = belThirOne) {
  //  if (month = 2) {
  //    return 28 
  //  }
  //else {
  //    return 30
  //  }
  //}
  // This is your job. :)
  if (monthNum === 1 || monthNum === 3 || monthNum === 5 || monthNum === 7 || monthNum === 8 || monthNum === 10 || monthNum === 12) {
    return 31
  } 
  else if (monthNum === 2){
    return 28
  }
  else {
    return 30
  }
}

if (require.main === module) {
  console.log('Running sanity checks for isZero:');

  console.log(daysInMonthByNumber(1) === 31);
  console.log(daysInMonthByNumber(2) === 28);
  console.log(daysInMonthByNumber(3) === 31);
  console.log(daysInMonthByNumber(4) === 30);
}

module.exports = daysInMonthByNumber;
