// let DEBUGGING_MODE=true;

// function debug(arg1, arg2, arg3) {
//     if (DEBUGGING_MODE) {
//         console.log(arg1, arg2, arg3);
//     }
// }


// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'gray', 'pink'];
// // let index = readlineSync.keyInSelect(colors, 'What color background do you want?');

// let currentTurn = 0;
// let players = ['X', 'O', ' '];

// function handleBoardClick(element) {
//     console.log(element.id);
//     let cellData = element.id.split('-');

//     console.log(cellData);
//     let currentPlayer = players[currentTurn % 3];

//     element.innerText = currentPlayer;

//     currentTurn += 1;
// }

// let currentBoard = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
// ];


let process = require('process');
let readlineSync;
readlineSync = require('readline-sync');

function clearScreen() {
    let lines = process.stdout.getWindowSize()[1];

    for(var i = 0; i < lines; i++) {
        console.log('\n');
    }
}


let player1 = readlineSync.question('What is your name, player 1? ');
let p1Symbol = (readlineSync.question("Welcome, " + player1 + "! Do you want to be X or O? ").toUpperCase());
if(p1Symbol!=="X" && p1Symbol!=="O"){
    p1Symbol = (readlineSync.question("You must choose X or O: ").toUpperCase());
}

// let player1 = 'Yo Yo Ma';
// let p1Symbol = 'O';

let count = 0;
console.log(count);
let computerSymbol = getSymbol(p1Symbol);
startGame(count);
    
function startGame(count){ 

    count = 0;

    let currentBoard = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];

    printBoard(currentBoard);
    
    position = readlineSync.question('Enter position (1-9): ');

    makeMove(currentBoard, getRow(position), getCol(position), p1Symbol, computerSymbol, count);
}

function printBoard(board) {
    clearScreen();

    for (let row of board) {
        console.log(row.join('|'));
    }
}

function getSymbol(p1Symbol){
    let symbol;
    
    if(p1Symbol==="X"){
        symbol = "O";
    }

    else if(p1Symbol==="O"){
        symbol = "X";
    }

    return symbol;
}

function getRow(position){
    let row; 
    if (position === '1') {
        row = 0
    }
    if (position === '2') {
        row = 0
    }
    if (position === '3') {
        row = 0
    }
    if (position === '4') {
        row = 1
    }
    if (position === '5') {
        row = 1
    }
    if (position === '6') {
        row = 1
    }
    if (position === '7') {
       row = 2
    }
    if (position === '8') {
       row = 2
    }
    if (position === '9') {
        row = 2
    }
    return row;
}

function getCol(position){
    let col; 

    if (position === '1') {
        col = 0
    }
    if (position === '2') {
        col = 1
    }
    if (position === '3') {
        col = 2
    }
    if (position === '4') {
        col = 0
    }
    if (position === '5') {
        col = 1
    }
    if (position === '6') {  
        col = 2
    }
    if (position === '7') {
        col = 0
    }
    if (position === '8') {
        col = 1
    }
    if (position === '9') {
        col = 2
    }

    return col;
}


function makeMove(currentBoard, row, col, p1Symbol, computerSymbol){
  
    results(currentBoard);
    currentBoard[row][col] = p1Symbol;
    printBoard(currentBoard);
    results(currentBoard);
    computerMove(currentBoard, computerSymbol);
    results(currentBoard);
}

function computerMove(currentBoard, computerSymbol){
   
    results(currentBoard);

    let row;
    let col;


    do {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
    } while(currentBoard[row][col] !== ' ')

    currentBoard[row][col]=computerSymbol;
    printBoard(currentBoard);
    results(currentBoard);
    let newPosition = readlineSync.question('Enter position (1-9): ');
    if(currentBoard[getRow(newPosition)][getCol(newPosition)]==="X" 
        || currentBoard[getRow(newPosition)][getCol(newPosition)]==="O"){
            newPosition = readlineSync.question('That position is already filled. Choose an empty position (1-9): ');
        }
    results(currentBoard);
    makeMove(currentBoard, getRow(newPosition), getCol(newPosition), p1Symbol, computerSymbol, count);
    results(currentBoard);
}


function results(currentBoard){
    let winner;

    let count = 0; 

    for(let i = 0; i<currentBoard.length; i++){
        for(let j = 0; j<currentBoard[0].length; j++){
            if(currentBoard[i][j]!==" "){
                count++;
            }
        }
    }

    if(count===9){
        console.log("It's a draw!");
        process.exit();
    }

    if(currentBoard[0][0]==="X" && currentBoard[0][1]==="X" && currentBoard[0][2]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[1][0]==="X" && currentBoard[1][1]==="X" && currentBoard[1][2]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[2][0]==="X" && currentBoard[2][1]==="X" && currentBoard[2][2]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[0][0]==="X" && currentBoard[1][0]==="X" && currentBoard[2][0]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[0][1]==="X" && currentBoard[1][1]==="X" && currentBoard[2][1]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[0][2]==="X" && currentBoard[1][2]==="X" && currentBoard[2][2]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[0][0]==="X" && currentBoard[1][1]==="X" && currentBoard[2][2]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[0][2]==="X" && currentBoard[1][1]==="X" && currentBoard[2][0]==="X"){    
        console.log("X wins!")
        if(p1Symbol==="X"){ 
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
    }

    if(currentBoard[0][0]==="O" && currentBoard[0][1]==="O" && currentBoard[0][2]==="O"){
        console.log("O wins!")
        if(p1Symbol==="O"){
            winner = player1;
        }

        else{
            winner = computerSymbol;
        }
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

        if(winner!==undefined){
            endGame(winner)
            process.exit(); 
        }
}

function endGame(winner){
    if(winner===player1){
        console.log("Good job, " + player1 + ", you won!");
    }

    else{
        //console.log(winner);
        console.log("Try again next time, " + player1 + "!");
    }
}
   
