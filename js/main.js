
//  constants
const COLORS = {
  0: 'white',
  1: 'yellow',
  '-1': 'black'

}


// variables 
let board
let turn
let winner


// cached elements 
const messageEl = document.querySelector('h3')
const resetBtn = document.querySelector('button')
boardEls = [...document.querySelectorAll('#board > div')]


// functions
init()


function init() { 

  // values for initial state variables
  turn = 1
  winner = null
  

  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  render()
}



function renderBoard() {

  // loop over board array
  board.forEach((colArr, colIdx) => {
 

    // loop over column Array
    colArr.forEach((cellVal, rowIdx) => {
   
      // cell id
      const cellId = `c${colIdx}r${rowIdx}`
      
      // targeting cell
      const cellEl = document.getElementById(cellId)

      // applying color dependent on value of div
      cellEl.style.backgroundColor = COLORS[cellVal]
    }) 
  })   
}


function renderControls() {

// change reset button visability
//resetBtn.style.visibility = winner ? 'visible' : 'hidden'

}

function renderMessage() {

  // message choosing player turn
  if (winner === 'T') {
    messageEl.innerText = "Tie!"

   // message winner
  } else if (winner) {
    messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">
    ${COLORS[winner].toUpperCase()}</span> Wins!`

    // message the current turn
  } else {
    messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">
    ${COLORS[turn].toUpperCase()}</span>'s turn!`
  }

}

function render() {
  
  // renders
  renderBoard() 
  renderMessage()
  renderControls()

}



 function handleDrop(event) {

const colSlice = event.target.id.slice(1,2)
const rowSlice = event.target.id.slice(3,4)

const colIdx = Number(colSlice)
const rowIdx = Number(rowSlice)
 
   
if(winner) return

  // if invalid exit
  if (board[colIdx][rowIdx] !== 0) return

  // assign value using these two variables
  board[colIdx][rowIdx] = turn

  // change turns (1)
  turn *= -1

  // check for winner
  winner = getWinner(colIdx, rowIdx)
  
  // render new changes to board
  render()
}



// check adjacent tiles
function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
  const player = board[colIdx][rowIdx]
  let count = 0

  //keep within board
  // count if square matches player
  while (
    board[colIdx] !== undefined && 
    board[colIdx][rowIdx] !== undefined && 
    board[colIdx][rowIdx] === player
  ){
    count ++
    colIdx += colOffset
    rowIdx += rowOffset
  }
  
} 


// check horizontal win
function checkHorizontalWinner(colIdx, rowIdx) {
  // left
  const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
  // right
  const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0)

  return adjCountLeft + adjCountRight >= 0 ? board[colIdx][rowIdx] : null
}


// check vertical win
function checkVerticalWinner(colIdx, rowIdx) {

  // go from N to S
  return countAdjacent(colIdx, rowIdx, 0, -1) === 0 ? board[colIdx][rowIdx] : null
}

// check diagonal
function checkDiagonalWinNWSE(colIdx, rowIdx) {
  // we'll use countAdjacent and move our row and column this time
  // go NW
  const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
  // go SE
  const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1)

  return adjCountNW + adjCountSE >= 0 ? board[colIdx][rowIdx] : null
}

function checkDiagonalWinNESW(colIdx, rowIdx) {
  // we'll use countAdjacent and move our row and column this time
// go NW
const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
// go SE
const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1)

return adjCountNE + adjCountSW >= 0 ? board[colIdx][rowIdx] : null
}

// winner check
function getWinner(colIdx, rowIdx) {

    return (
        checkVerticalWinner(colIdx, rowIdx) || 
        checkHorizontalWinner(colIdx, rowIdx) ||
        checkDiagonalWinNESW(colIdx, rowIdx) ||
        checkDiagonalWinNWSE(colIdx, rowIdx)
    )

    
}




// event listeners
document.getElementById('board').addEventListener('click', handleDrop)
resetBtn.addEventListener('click', init)