/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
function rockPaperScissorsWinner(firstPlayerMove, secondPlayerMove) {
  // This is your job. :)
  if (firstPlayerMove === secondPlayerMove) {
    return 'draw'
  }
  else if (firstPlayerMove === 0 && secondPlayerMove === 2) {
    return 'lose'
  }
  else if (firstPlayerMove === 2 && secondPlayerMove === 0) {
    return 'win'
  }
  else if (firstPlayerMove < secondPlayerMove) {
    return 'win'
  }
  else 
    return 'lose'  
}

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');

  console.log(rockPaperScissorsWinner(0, 0) === 'draw') //(both players played scissors)
  console.log(rockPaperScissorsWinner(0, 1) === 'win') //(scissors beats paper)
  console.log(rockPaperScissorsWinner(0, 2) === 'lose') //(scissors loses to rock)
  console.log(rockPaperScissorsWinner(1, 0) === 'lose') //(paper loses to scissors)
  console.log(rockPaperScissorsWinner(1, 1) === 'draw') //(both players played paper)
  console.log(rockPaperScissorsWinner(1, 2) === 'win') //(paper beats rock)
  console.log(rockPaperScissorsWinner(2, 0) === 'win') //(rock beats scissors) 
  console.log(rockPaperScissorsWinner(2, 1) === 'lose') //(rock loses to paper)
  console.log(rockPaperScissorsWinner(2, 2) === 'draw') //(both players played rock)

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = rockPaperScissorsWinner;
