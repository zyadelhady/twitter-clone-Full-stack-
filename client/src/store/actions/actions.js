export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
export const CHANGE_COLOR = 'CHANGE_COLOR';

export const GET_TWEETS_START = 'GET_TWEETS_START';
export const GET_TWEETS = 'GET_TWEETS';
export const GET_TWEETS_DONE = 'GET_TWEETS_DONE';

export const SEND_TWEET_START = 'SEND_TWEET_START';
export const SEND_TWEET = 'SEND_TWEET';
export const SEND_TWEET_DONE = 'SEND_TWEET_DONE';

export const GET_USER_SIGNIN_START = 'GET_USER_SIGNIN_START';
export const GET_USER_SIGNUP_START = 'GET_USER_SIGNUP_START';

export const GET_USER = 'GET_USER';
export const GET_USER_DONE = 'GET_USER_DONE';

export const SET_ERROR = 'SET_ERROR';

export const GET_ME = 'GET_ME';

export const LOGOUT = 'LOGOUT';
export const SET_LOGOUT = 'SET_LOGOUT';

export const changeBackground = (background) => {
  localStorage.setItem('background', background);
  return {
    type: CHANGE_BACKGROUND,
    background: background,
  };
};

export const changeColor = (color) => {
  localStorage.setItem('color', color);
  return {
    type: CHANGE_COLOR,
    color: color,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error: error,
  };
};

export const getMe = (error) => {
  return {
    type: GET_ME,
  };
};

export const logout = (error) => {
  return {
    type: LOGOUT,
  };
};

export const setLogout = () => {
  return {
    type: SET_LOGOUT,
  };
};

export const getUserSignupStart = (data) => {
  return {
    type: GET_USER_SIGNUP_START,
    data: data,
  };
};

export const getUserSigninStart = (data) => {
  return {
    type: GET_USER_SIGNIN_START,
    data: data,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const getUserDone = (data) => {
  return {
    type: GET_USER_DONE,
    data: data,
  };
};

export const getTweetsStart = () => {
  return {
    type: GET_TWEETS_START,
  };
};

export const getTweets = () => {
  return {
    type: GET_TWEETS,
  };
};

export const getTweetsDone = (data) => {
  return {
    type: GET_TWEETS_DONE,
    data: data,
  };
};

export const sendTweetStart = (data) => {
  return {
    type: SEND_TWEET_START,
    data: data,
  };
};

export const sendTweet = () => {
  return {
    type: SEND_TWEET,
  };
};

export const sendTweetDone = (data) => {
  return {
    type: SEND_TWEET_DONE,
    data: data,
  };
};
