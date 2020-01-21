/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a hollow right triangle `height` characters tall
 * consisting of `#` characters.
 *
 * Note, this PRINTS a triangle, it does not RETURN a triangle.
 *
 * @example
 * printHollowRightTriangle(2); // Prints the following:
 * #
 * ##
 *
 * @example
 * printHollowRightTriangle(3); // Prints the following:
 * #
 * ##
 * ###
 *
 * @example
 * printHollowRightTriangle(6); // Prints the following:
 * #
 * ##
 * # #
 * #  #
 * #   #
 * ######
 *
 * @param {number} height - The height of the triangle to print
 */
function printHollowRightTriangle(height) {
    /*
      This is your job. :)

      Play with iterating from 1, 2, ..., height instead of 0, 1, 2, ..., height-1.
      Depending on your approach, it might simplify the logic.
    */

    if (height === 1) {
      helpers.printCountTimes('#', 1);
  }
    else if (height === 2) {
      helpers.printCountTimes('#', 1);      
      helpers.printNewLine();
      helpers.printCountTimes('#', height);      
  }
      else {
        helpers.printCountTimes('#', 1);
        helpers.printNewLine();
      for (let i = 1; i < height - 1; i++) {
    
        let numChars = height
        let numSpaces = height - 2
     
        helpers.printCountTimes('#', 1);
        helpers.printCountTimes(' ', numSpaces - height + i + 1);    
        helpers.printCountTimes('#', 1);
        helpers.printNewLine();
      }
      helpers.printCountTimes('#', height);
      helpers.printNewLine()
    }
  }
/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowSquarePrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW SQUARE of height ${height}:`);

  printHollowRightTriangle(height);
  }
/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowRightTrianglePrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW RIGHT TRIANGLE of height ${height}:`);

  printHollowRightTriangle(height);
}

if (require.main === module) {
  hollowRightTrianglePrintTest(1);
  hollowRightTrianglePrintTest(2);
  hollowRightTrianglePrintTest(3);
  hollowRightTrianglePrintTest(4);
  hollowRightTrianglePrintTest(6);
  hollowRightTrianglePrintTest(10);  
  hollowRightTrianglePrintTest(15);
}

module.exports = printHollowRightTriangle;
