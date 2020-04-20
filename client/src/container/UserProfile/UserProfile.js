import React, { useEffect, useState, useCallback } from 'react';
import classes from './UserProfile.module.scss';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { Button } from '../../component/Button/Button';
import Tweet from '../../component/Tweet/Tweet';
// import { connect } from 'react-redux';
import axios from '../../axios';
import { Spinner } from '../../component/Spinner/Spinner';

export const UserProfile = () => {
  const { username } = useParams();
  const { goBack } = useHistory();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [tweetsNum, setTweetsnum] = useState();

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const user = await axios.get(`users/${username}`);
      setUser(user.data.data.data);
      const tweets = await axios.get(`users/${username}/tweets/`);
      setTweets(tweets.data.data.data);
      setTweetsnum(tweets.data.results);

      setLoading(false);
    } catch (e) {
      console.log(e.response);
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    getData();
  }, [getData]);

  const P = styled.p`
    color: ${(props) =>
      props.secondary ? props.theme.textSecondry : props.theme.textPrimary};

    font-size: ${(props) => (props.secondary ? '1.5rem' : '2rem')};
    font-weight: ${(props) => (props.secondary ? '400' : '700')};
    margin-top: ${(props) => (props.secondary ? '.4rem' : '')};
  `;

  const ProfileButton = styled.button`
    border: 1px solid ${({ theme }) => theme.color};
    outline: none;
    background: transparent;
    border-radius: 3rem;
    padding: 0.8rem 1.5rem;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-weight: 900;

    &:hover {
      background: ${({ theme }) => theme.hover};
    }
  `;

  const Img = styled.img`
    border: 4.5px solid ${({ theme }) => theme.bgPrimary};
  `;

  const Bio = styled.p`
    color: ${(props) => props.theme.textPrimary};
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 1rem;
  `;

  const render = Object.values(tweets).map((i) => {
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

  const getUserImage = async (e) => {
    try {
      let file;
      file = e.target.files[0];
      const fd = new FormData();
      fd.append('photo', file, file.name);
      const response = await axios.post('users/update-me', fd);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  const getCoverImage = async (e) => {
    try {
      let file;
      file = e.target.files[0];
      const fd = new FormData();
      fd.append('cover', file, file.name);
      const response = await axios.post('users/update-me', fd);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className={classes.UserProfile}>
      <div className={classes.UserProfile_Header}>
        <div className={classes.UserProfile_Header_Arrow}>
          <Button onClick={goBack}>
            <MdArrowBack />
          </Button>
        </div>
        <div className={classes.UserProfile_Header_Info}>
          <P>{user.name}</P>
          <P secondary>{tweetsNum} Tweets</P>
        </div>
      </div>
      <div className={classes.Border}></div>
      {loading ? (
        <div className={classes.Spinner}>
          <Spinner />
        </div>
      ) : (
        <React.Fragment>
          <div className={classes.UserProfile_Info}>
            <div className={classes.UserProfile_Info_Cover}>
              <input id="coverImage" type="file" onChange={getCoverImage} />
              <label htmlFor="coverImage">
                <img
                  src={`http://127.0.0.1:4000/${user.cover}`}
                  // src={usercover}
                  alt="user cover"
                />
              </label>
            </div>
            <div className={classes.UserProfile_Info_Photo}>
              <div className={classes.UserProfile_Info_Photo_Image}>
                <input id="userImage" type="file" onChange={getUserImage} />
                <label htmlFor="userImage">
                  <Img src={`http://127.0.0.1:4000/${user.photo}`} alt="user" />
                </label>
              </div>
              <div className={classes.UserProfile_Info_Photo_Button}>
                <ProfileButton>Edit Profile</ProfileButton>
              </div>
            </div>
            <div className={classes.UserProfile_Info_Name}>
              <P>{user.name}</P>
              <P secondary>@{username}</P>
              <Bio>welcome to my profile</Bio>
            </div>
          </div>
          <div className={classes.Border}></div>
          <div className="">{render}</div>
        </React.Fragment>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.user.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // getUser: (username) => dispatch(actionTypes.getUserProfileStart(username)),
//   };
// };

export default UserProfile;
