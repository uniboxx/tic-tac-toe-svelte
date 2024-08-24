const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

import { WINNING_COMBINATIONS } from '../winning-combinations';

function createState() {
  let gameTurns = $state([]);
  let winner = $state();
  let gameBoard = $state(initialGameBoard);
  let hasDraw = $state(false);
  let players = $state({
    X: 'Player 1',
    O: 'Player 2',
  });

  let activePlayer = $derived.by(() => {
    let activePlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      activePlayer = 'O';
    }
    return activePlayer;
  });

  // let gameBoard = $derived.by(() => {
  //   let gameBoard = initialGameBoard;
  //   gameTurns.forEach(turn => {
  //     const { square, player } = turn;
  //     const { row, col } = square;
  //     gameBoard[row][col] = player;
  //   });
  //   return gameBoard;
  // });

  function updateGameBoard() {
    gameTurns.forEach(turn => {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
    });
  }

  function checkCombinations(combination) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  function handleSelectSquare(rowIdx, colIdx) {
    let currentPlayer = activePlayer;

    gameTurns.unshift({
      square: { row: rowIdx, col: colIdx },
      player: currentPlayer,
    });
    updateGameBoard();

    WINNING_COMBINATIONS.forEach(checkCombinations);
    hasDraw = gameTurns.length === 9 && !winner;
  }
  function handleRestart() {
    gameBoard = initialGameBoard;
    gameTurns = [];
    winner = '';
    hasDraw = false;
    players = { X: 'Player 1', O: 'Player 2' };
  }

  function updatePlayerName(symbol, newName) {
    players[symbol] = newName;
  }

  return {
    get gameTurns() {
      return gameTurns;
    },
    set gameTurns(value) {
      gameTurns = value;
    },
    get gameBoard() {
      return gameBoard;
    },
    get activePlayer() {
      return activePlayer;
    },
    get winner() {
      return winner;
    },
    set winner(value) {
      winner = value;
    },
    get hasDraw() {
      return hasDraw;
    },
    set hasDraw(value) {
      hasDraw = value;
    },
    get players() {
      return players;
    },
    set players(value) {
      players = value;
    },
    checkCombinations,
    handleSelectSquare,
    updatePlayerName,
    handleRestart,
  };
}
export const s = createState();
