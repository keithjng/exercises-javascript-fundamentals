let helpers = require('../printHelpers');

/**
 * Given an integer `n`, print out an `n`-by-`n` times/multiplication table.
 *
 * Note, this PRINTS a table, it does not RETURN a table as a string.
 *
 * @example
 * multiplicationTable(2); // Prints the following:
 * 1 2
 * 2 4
 *
 * @example
 * multiplicationTable(5); // Prints the following:
 *  1  2  3  4  5
 *  2  4  6  8 10
 *  3  6  9 12 15
 *  4  8 12 16 20
 *  5 10 15 20 25
 *
 * @param {number} n - The size of the multiplication table to print
 */
//  I initially wanted to make this second function to make the spaces, but it wasn't working out. 
//  That's when I discovered \t!! It makes it kind of spacey, but it seems to work so no complaints. 
//
//function space(n) {
//     let space = '';
//     let char = n.toString();
//     if (char.length < 2) {
//       space = space + '   ';            
//       return space;
//     }
//     else if (char.length < 3) {
//       space = space + '  ';            
//       return space;
//     }
//     else 
//     space = space + ' ';            
//       return space;
//  }
  function printMultiplicationTable(n) {
  /*
    This is your job. :)
    Note: Getting the numbers aligned in a way that looks nice can be
    a pain in the butt. Get one version working that prints out the
    multiplication table without concern for alignment and then figure
    out how to align the columns.
  */
  if (n === 1) {
    helpers.printCountTimes('1', 1);
    helpers.printNewLine(); 
  }
  else {
    for (let j = 1; j < n + 1; j++) {
      for (let i = 1; i < n + 1; i++) {
      helpers.printCountTimes('\t' + j * i, 1) 
      }
      helpers.printNewLine(); 
    }
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function multiplicationTablePrintTest(n) {
  console.log('');
  console.log(`Printing a ${n}-by-${n} MULTIPLICATION TABLE:`);

  printMultiplicationTable(n);
}

if (require.main === module) {
  multiplicationTablePrintTest(1);
  multiplicationTablePrintTest(2);
  multiplicationTablePrintTest(5);
  multiplicationTablePrintTest(8);
  multiplicationTablePrintTest(10);
  multiplicationTablePrintTest(15);
}

module.exports = printMultiplicationTable;
