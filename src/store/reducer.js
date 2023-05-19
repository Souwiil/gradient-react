import randomHexColor from '../randomHexColor';

const initialState = {
  firstColor: '#F0F',
  lastColor: '#0F0',
  direction: '90deg',
  directionIsLeft: true,
  nbColors: 0,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'RANDOMIZE_FIRST_COLOR':
      return {
        ...state, // La copie du state
        nbColors: state.nbColors + 1,
        firstColor: randomHexColor(),
      };

    case 'RANDOMIZE_LAST_COLOR':
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: randomHexColor(),
      };

    case 'RANDOMIZE_ALL_COLORS':
      return {
        ...state,
        nbColors: state.nbColors + 2,
        firstColor: randomHexColor(),
        lastColor: randomHexColor(),
      };

    case 'SET_DIRECTION':
      return {
        ...state,
        direction: `${action.payload.degrees}deg`,
        directionIsLeft: action.payload.degrees < 180,
      };

    default:
      return state;
  }
}

export default reducer;