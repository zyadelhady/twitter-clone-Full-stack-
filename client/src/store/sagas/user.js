import axios from '../../axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actions';

export function* signupSaga(action) {
  try {
    yield put(actionTypes.getUser());
    const response = yield axios.post('users/signup', { ...action.data });
    yield put(actionTypes.getUserDone(response.data.data.user));
  } catch (e) {
    yield put(actionTypes.setError(e.response.data.message));
  }
}

export function* signinSaga(action) {
  try {
    yield put(actionTypes.getUser());
    const response = yield axios.post('users/signin', { ...action.data });

    yield put(actionTypes.getUserDone(response.data.data.user));
  } catch (e) {
    yield put(actionTypes.setError(e.response.data.message));
  }
}

export function* getMeSaga() {
  try {
    yield put(actionTypes.getUser());
    const response = yield axios.get('users/me/');

    yield put(actionTypes.getUserDone(response.data.data.data));
  } catch (e) {
    yield put(actionTypes.setError(''));
  }
}

export function* logoutSaga() {
  try {
    yield axios.get('users/logout/');
    yield put(actionTypes.setLogout());
  } catch (e) {
    console.log(e);
  }
}

export function* watchUser() {
  yield takeEvery(actionTypes.GET_USER_SIGNUP_START, signupSaga);
  yield takeEvery(actionTypes.GET_USER_SIGNIN_START, signinSaga);
  yield takeEvery(actionTypes.GET_ME, getMeSaga);
  yield takeEvery(actionTypes.LOGOUT, logoutSaga);
}
