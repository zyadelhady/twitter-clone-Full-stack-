import React, { useState, useEffect } from 'react';
import classes from './Home.module.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { WiStars } from 'react-icons/wi';
import styled from 'styled-components';
import Tweet from '../../component/Tweet/Tweet';
import AddTweet from '../../component/AddTweet/AddTweet';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

import { Spinner } from '../../component/Spinner/Spinner';

const Home = (props) => {
  const dispatch = useDispatch();
  const [bottom, setBottom] = useState(false);

  const P = styled.p`
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Roboto';
    font-weight: 900;
  `;
  const Div = styled.div`
    color: ${({ theme }) => theme.color};
  `;

  const page = props.page;

  useEffect(() => {
    dispatch(actionTypes.getTweetsStart({ page, limit: 10 }));
    setBottom(false);
  }, [dispatch, bottom]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setBottom(true);
    }
  };

  let render = null;

  render = Object.values(props.tweets).map((i) => {
    return (
      <Tweet
        key={i._id}
        tweetid={i._id}
        userimg={i.user.photo}
        name={i.user.name}
        handle={i.user.username}
        tweet={i.text}
        tweetimg={i.photo}
      />
    );
  });

  return (
    <React.Fragment>
      <div className={classes.Home}>
        <Div className={classes.Home_Header}>
          <NavLink to="/home">
            <P>Home</P>
          </NavLink>
          <WiStars />
        </Div>
        <div className={classes.Border}></div>
        <AddTweet />
        {render}
        {props.loading ? (
          <div className={classes.Spinner}>
            <Spinner />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets.tweets,
    loading: state.tweets.loading,
    page: state.tweets.page,
  };
};

export default connect(mapStateToProps)(Home);
