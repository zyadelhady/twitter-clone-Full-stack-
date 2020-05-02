import * as actionTypes from '../actions/actions';

let initialState = {
  user: null,
  loading: false,
  error: '',
  sendingUpdates: false,
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
    case actionTypes.SEND_UPDATED_USER:
      return {
        ...state,
        sendingUpdates: true,
      };
    case actionTypes.SEND_UPDATED_USER_DONE:
      return {
        ...state,
        sendingUpdates: false,
        user: { ...action.data },
      };

    default:
      return state;
  }
};

export default reducer;
