import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import themesReducer from './store/reducers/themes';
import tweetsReducer from './store/reducers/tweets';
import userReducer from './store/reducers/user';

import * as serviceWorker from './serviceWorker';
import { watchTweets } from './store/sagas/tweets';
import { watchUser } from './store/sagas/user';

import { BrowserRouter } from 'react-router-dom';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  themes: themesReducer,
  tweets: tweetsReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchTweets);
sagaMiddleware.run(watchUser);

ReactDOM.render(
  <BrowserRouter basename="/twitter-clone">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
