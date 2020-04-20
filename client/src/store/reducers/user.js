import * as actionTypes from '../actions/actions';

let initialState = {
  user: null,
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_USER_DONE:
      return {
        ...state,
        loading: false,
        user: { ...action.data },
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.SET_LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
