let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameMode = '';
let isGameOver = false;
const messageElement = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  isGameOver = false;
  messageElement.textContent = '';
  cells.forEach(cell
  )
}