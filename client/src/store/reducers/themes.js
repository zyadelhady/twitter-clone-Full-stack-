import * as actionTypes from '../actions/actions';

let initialState = {
  background: 'LIGHT_MODE',
  color: 'blue'
};

if (localStorage.getItem('background')) {
  initialState = {
    ...initialState,
    background: localStorage.getItem('background')
  };
}

if (localStorage.getItem('color')) {
  initialState = {
    ...initialState,
    color: localStorage.getItem('color')
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BACKGROUND:
      return {
        ...state,
        background: action.background
      };
    case actionTypes.CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export default reducer;
