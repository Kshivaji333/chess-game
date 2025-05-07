import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameMode: null, // 'computer' or 'friend'
  playerNames: {
    white: '',
    black: '',
  },
  gameTime: 10, // default time in minutes
  playerColors: {
    white: 'white',
    black: 'black',
  },
  gameStarted: false,
  currentTurn: 'white',
  gameHistory: [],
  undoCount: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    setPlayerNames: (state, action) => {
      state.playerNames = action.payload;
    },
    setGameTime: (state, action) => {
      state.gameTime = action.payload;
    },
    setPlayerColors: (state, action) => {
      state.playerColors = action.payload;
    },
    startGame: (state) => {
      state.gameStarted = true;
    },
    endGame: (state) => {
      state.gameStarted = false;
    },
    setCurrentTurn: (state, action) => {
      state.currentTurn = action.payload;
    },
    addToHistory: (state, action) => {
      state.gameHistory.push(action.payload);
    },
    setUndoCount: (state, action) => {
      state.undoCount = action.payload;
    },
  },
});

export const {
  setGameMode,
  setPlayerNames,
  setGameTime,
  setPlayerColors,
  startGame,
  endGame,
  setCurrentTurn,
  addToHistory,
  setUndoCount,
} = gameSlice.actions;

export default gameSlice.reducer; 