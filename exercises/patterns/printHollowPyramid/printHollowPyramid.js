/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid pyramid `height` characters tall
 * consisting of `#` characters.
 *
 *
 * Note, this PRINTS a pyramid, it does not RETURN a pyramid.
 *
 * @example
 * printHollowPyramid(2); // Prints the following:
 *  #
 * ###
 *
 * @example
 * printHollowPyramid(5); // Prints the following:
 *     #
 *    # #
 *   #   #
 *  #     #
 * #########
 *
 * @param {number} height - The height of the pyramid to print
 */
function printHollowPyramid(height) {
    // This is your job. :)
  if (height === 1) {
    helpers.printCountTimes('#', 1)
  }

  else if (height === 2) {
    helpers.printCountTimes(' ', 1)
    helpers.printCountTimes('#', 1)
    helpers.printNewLine();
    helpers.printCountTimes('#', 3);
  }

  else {
      helpers.printCountTimes(' ', height - 1);
      helpers.printCountTimes('#', 1);
      helpers.printNewLine();
    for (let i = 1; i < height - 1; i++) {
      let numSpaces = height - i;
      let numSpaces2 = 2 * i - 1;
  
      helpers.printCountTimes(' ', numSpaces - 1);
      helpers.printCountTimes('#', 1);
      helpers.printCountTimes(' ', numSpaces2);
      helpers.printCountTimes('#', 1);
      helpers.printNewLine();

    }
    helpers.printCountTimes('#', height * 2 - 1);
    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowPyramidPrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW PYRAMID of height ${height}:`);

  printHollowPyramid(height);
}

if (require.main === module) {
  hollowPyramidPrintTest(1);
  hollowPyramidPrintTest(2);
  hollowPyramidPrintTest(3);
  hollowPyramidPrintTest(6);
  hollowPyramidPrintTest(8);
  hollowPyramidPrintTest(10);
  hollowPyramidPrintTest(15);
}

module.exports = printHollowPyramid;
