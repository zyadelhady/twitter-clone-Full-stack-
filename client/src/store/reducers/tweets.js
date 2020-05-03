import * as actionTypes from '../actions/actions';

let initialState = {
  tweets: [],
  loading: false,
  sendTweetLoading: false,
  page: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TWEETS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_TWEETS_DONE:
      return {
        ...state,
        loading: false,
        tweets: [...state.tweets, ...action.data],
        page: state.page + 1,
      };
    case actionTypes.SEND_TWEET:
      return {
        ...state,
        sendTweetLoading: true,
      };
    case actionTypes.SEND_TWEET_DONE:
      return {
        ...state,
        sendTweetLoading: false,
        tweets: [action.data, ...state.tweets],
      };

    default:
      return state;
  }
};

export default reducer;
