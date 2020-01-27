/**
 * Goal:
 * x |   | o 
 * - - - - -  
 *   |   | 
 * - - - - -
 *   |   |   
 * 
 * #  # |      |   #
 *  #   |      | #   #
 * #  # |      |   #
 * - - - - - - - - - -  
 *      |      |
 *      |      |
 *      |      |
 * - - - - - - - - - -  
 *      |      |
 *      |      |
 *      |      |
 */

//let helpers = require('../printHelpers');

//function printBoard(height) {
//    for (let i = 0; i < height; i++) {
//        helpers.printCountTimes(' ', 5);
//        helpers.printCountTimes('|', 1);
//    }
//}
//function printBoardTest(height) {
//    console.log('');
//    console.log(`Printing a HOLLOW PYRAMID of height ${height}:`);
  
//    printBoard(height);
//  }
  
//  if (require.main === module) {
//    printBoardTest(9);
//}
//console.log(Math.ceil(Math.random() * 9))

/* let currentBoard = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
]
function printBoard(currentBoard){
    for (let row of currentBoard) {
        console.log(row.join('|'))
    }
}
 */

let player2 = 'o'
let prevInp = 1
let comp = Math.ceil(Math.random() * 9) 
if (comp = prevInp) {
   //rerun random number generator 
}
else {
   print (player2 in comp)
}

if(currentBoard[1][0]==="O" && currentBoard[1][1]==="O" && currentBoard[1][2]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
if(currentBoard[2][0]==="O" && currentBoard[2][1]==="O" && currentBoard[2][2]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
if(currentBoard[0][0]==="O" && currentBoard[1][0]==="O" && currentBoard[2][0]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
if(currentBoard[0][1]==="O" && currentBoard[1][1]==="O" && currentBoard[2][1]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
if(currentBoard[0][2]==="O" && currentBoard[1][2]==="O" && currentBoard[2][2]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
if(currentBoard[0][0]==="O" && currentBoard[1][1]==="O" && currentBoard[2][2]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
if(currentBoard[2][0]==="O" && currentBoard[1][1]==="O" && currentBoard[0][2]==="O"){
    console.log("O wins!")
    if(p1Symbol==="O"){
        winner = player1;
    }
    else{
        winner = computerSymbol;
    }
}
