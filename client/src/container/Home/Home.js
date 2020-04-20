import React from 'react';
import classes from './Home.module.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { WiStars } from 'react-icons/wi';
import styled from 'styled-components';
import Tweet from '../../component/Tweet/Tweet';
import AddTweet from '../../component/AddTweet/AddTweet';

import { Spinner } from '../../component/Spinner/Spinner';

const Home = (props) => {
  const P = styled.p`
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Roboto';
    font-weight: 900;
  `;
  const Div = styled.div`
    color: ${({ theme }) => theme.color};
  `;

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
      {props.loading ? (
        <div className={classes.Spinner}>
          <Spinner />
        </div>
      ) : (
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
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets.tweets,
    loading: state.tweets.loading,
  };
};

export default connect(mapStateToProps)(Home);
