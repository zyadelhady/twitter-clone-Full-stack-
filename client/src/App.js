import React, { useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import * as actionTypes from './store/actions/actions';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { themes } from './styledComponents/themes';
import { Route, Switch } from 'react-router-dom';
import Home from './container/Home/Home';
import { connect } from 'react-redux';
import { PhotoModal } from './component/PhotoModal/PhotoModal';
import { Notifications } from './container/Notifications/Notifications';
import { Redirect } from './component/Redirect/Redirect';
import UserProfile from './container/UserProfile/UserProfile';
import Signup from './container/Auth/Signup/Signup';
import styled from 'styled-components';
import Login from './container/Auth/Login/Login';
import DisplayModal from './component/DisplayModal/DisplayModal';

function App(props) {
  const getMe = props.getMe;
  const getTweets = props.getTweets;

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  useEffect(() => {
    getMe();
  }, [getMe]);

  let render = (
    <Switch>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Redirect />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/user/:username">
              <UserProfile />
            </Route>
            <Route path="/display">
              <DisplayModal />
            </Route>
            <Route path="/:username/photo/:id">
              <PhotoModal />
            </Route>
            <Route>
              <Redirect />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Switch>
  );

  const Div = styled.div`
    background-color: ${({ theme }) => theme.bgPrimary};
    height: 100vh;
    display: flex;
    justify-content: center;
  `;

  if (!props.user) {
    render = (
      <Div>
        <Switch>
          <Route exact path="/">
            <Redirect />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <Redirect />
          </Route>
        </Switch>
      </Div>
    );
  }

  return (
    <ThemeProvider
      theme={{ ...themes[props.background], ...themes[props.color] }}
    >
      {render}
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    background: state.themes.background,
    color: state.themes.color,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: () => dispatch(actionTypes.getTweetsStart()),
    getMe: () => dispatch(actionTypes.getMe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
