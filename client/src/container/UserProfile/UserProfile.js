import React, { useEffect, useState, useCallback, useRef } from 'react';
import classes from './UserProfile.module.scss';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { Button } from '../../component/Button/Button';
import Tweet from '../../component/Tweet/Tweet';
import axios from '../../axios';
import { Spinner } from '../../component/Spinner/Spinner';
import { UserHeader } from '../../component/UserHeader/UserHeader';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

const P = styled.p`
  color: ${(props) =>
    props.secondary ? props.theme.textSecondry : props.theme.textPrimary};

  font-size: ${(props) => (props.secondary ? '1.5rem' : '2rem')};
  font-weight: ${(props) => (props.secondary ? '400' : '700')};
  margin-top: ${(props) => (props.secondary ? '.4rem' : '')};
`;

export const UserProfile = () => {
  const dispatch = useDispatch();
  const [userUpdatedData, setUserUpdatedData] = useState({});
  const { username } = useParams();
  const { goBack } = useHistory();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [tweetsNum, setTweetsnum] = useState();
  const [editable, setEditable] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const bioRef = useRef(null);

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
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    getData();
  }, [getData]);

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

  const getUserImage = (e) => {
    let file;
    file = e.target.files[0];
    if (file) {
      setUserUpdatedData((prev) => {
        return { ...prev, photo: file };
      });
      let reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const getCoverImage = (e) => {
    let file;
    file = e.target.files[0];
    if (file) {
      setUserUpdatedData((prev) => {
        return { ...prev, cover: file };
      });
      let reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const nameChange = (e) => {
    setUserUpdatedData((prev) => {
      return { ...prev, name: nameRef.current.value };
    });
  };

  const emailChange = (e) => {
    setUserUpdatedData((prev) => {
      return { ...prev, email: emailRef.current.value };
    });
  };
  const bioChange = (e) => {
    setUserUpdatedData((prev) => {
      return { ...prev, Bio: bioRef.current.value };
    });
  };

  const saveEdit = () => {
    dispatch(actionTypes.sendUpdatedUserStart(userUpdatedData));
  };

  const EditProfile = () => {
    setEditable(true);
  };

  const closeEdit = () => {
    setEditable(false);
    setUserUpdatedData({});
    setPreviewImage(null);
    setCoverImage(null);
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
          {editable ? (
            <UserHeader.Edit
              user={user}
              username={username}
              closeEdit={closeEdit}
              getCoverImage={getCoverImage}
              getUserImage={getUserImage}
              saveEdit={saveEdit}
              nameChange={nameChange}
              emailChange={emailChange}
              bioChange={bioChange}
              nameRef={nameRef}
              emailRef={emailRef}
              bioRef={bioRef}
              previewImage={previewImage}
              coverImage={coverImage}
            />
          ) : (
            <UserHeader.Default
              user={user}
              username={username}
              EditProfile={EditProfile}
            />
          )}

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
