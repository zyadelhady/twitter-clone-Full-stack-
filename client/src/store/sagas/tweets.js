import axios from '../../axios';
import { put, takeEvery, takeLeading } from 'redux-saga/effects';
import * as actionTypes from '../actions/actions';

export function* getTweetsSaga(action) {
  try {
    yield put(actionTypes.getTweets());
    const response = yield axios.get(
      `tweets?page=${action.data.page}&limit=${action.data.limit}/`
    );
    yield put(actionTypes.getTweetsDone(response.data.data.data));
  } catch (e) {
    console.log(e.response);
  }
}

export function* sendTweetSaga(action) {
  try {
    yield put(actionTypes.sendTweet());
    const newTweet = yield axios.post('tweets/', action.data);
    yield put(actionTypes.sendTweetDone(newTweet.data.data.data));
  } catch (e) {
    console.log(e.response);
  }
}

export function* watchTweets() {
  yield takeLeading(actionTypes.GET_TWEETS_START, getTweetsSaga);
  yield takeEvery(actionTypes.SEND_TWEET_START, sendTweetSaga);
}
