import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [
    {
      username: '',
      isSpyMaster: false,
      ready: false,
    },
  ],
  wordsLeft: [],
};

const initialState = {
  sessionID: null,
  isRedTurn: true,
  redTeam: initialTeamObj,
  blueTeam: initialTeamObj,
  currUser: {
    username: 'Alfredo',
    isSpyMaster: false,
    team: 'Blue',
  },
  gameBoard: mockGameBoard,
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  // console.log('inside reducer');
  switch (action.type) {
    case types.NEW_SESSION:
      console.log('got a new session');
      return {
        ...state,
        sessionID: action.payload.sessionID,
      };
    case types.TEST:
      // alert(action.payload);
      console.log('testing testing');
      return state;
    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
      }
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;
