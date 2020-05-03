import React, { useRef, useState } from 'react';
import classes from './AddTweet.module.scss';
import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';
import { connect } from 'react-redux';
import { Button } from '../Button/Button';

import * as actionTypes from '../../store/actions/actions';
import { FiImage, FiBarChart2, FiSmile, FiCalendar } from 'react-icons/fi';
import { MdGif } from 'react-icons/md';

const TextArea = styled(TextareaAutosize)`
  color: ${(props) => props.theme.textPrimary};
  &::placeholder {
    color: ${(props) => props.theme.textSecondry};
  }
`;

const AddTweet = (props) => {
  const [tweetImage, setTweetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const Div = styled.div`
    padding: 1.4rem;
    color: ${(props) =>
      props.bottom ? props.theme.color : props.theme.textPrimary};
  `;

  const MdGifNew = styled(MdGif)`
    border: 1px solid ${(props) => props.theme.color};
    border-radius: 3px;
  `;

  const FiBarChart = styled(FiBarChart2)`
    border-bottom: 1px solid ${(props) => props.theme.color};
    transform: rotate(90deg);
  `;

  const TweetButton = styled.button`
    color: #fff;
    background-color: ${({ theme }) => theme.color};
    border: none;
    outline: none;
    padding: 1rem 1.5rem;
    border-radius: 3rem;
    font-weight: 700;
    font-size: 1.6rem;
    cursor: pointer;
    margin-left: 0.8rem;
    &:disabled {
      opacity: 0.3;
    }
  `;

  const textareaRef = useRef(null);

  const sendTweet = () => {
    const text = textareaRef.current.value;
    if (text || tweetImage) {
      const fd = new FormData();
      if (tweetImage) fd.append('tweetPhoto', tweetImage, tweetImage.name);
      fd.append('text', text);

      props.sendTweet(fd);
      setPreviewImage(null);
    }
  };

  const getTweetImage = async (e) => {
    let file = e.target.files[0];
    setTweetImage(file);
    let reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Div className={classes.AddTweet}>
      <div className={classes.AddTweet_Left}>
        <img
          src={`https://twitter-clone-zyad.herokuapp.com/${props.userimg}`}
          alt="user"
        />
      </div>
      <div className={classes.AddTweet_Right}>
        <TextArea
          ref={textareaRef}
          placeholder="What's Happening"
          className={classes.AddTweet_Right_TextArea}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !e.shiftKey) {
              e.preventDefault();
              return sendTweet();
            }
          }}
        />
        {previewImage && (
          <div className={classes.AddTweet_Right_Image}>
            <img src={previewImage} alt="preview" />
          </div>
        )}

        <div className={classes.AddTweet_Right_Bottom}>
          <div className={classes.AddTweet_Right_Bottom_Icons}>
            <input type="file" id="tweetImage" onChange={getTweetImage} />
            <label htmlFor="tweetImage">
              <Button>
                <FiImage />
              </Button>
            </label>
            <Button>
              <MdGifNew className={classes.GifIcon} />
            </Button>
            <Button>
              <FiBarChart />
            </Button>
            <Button>
              <FiSmile />
            </Button>
            <Button>
              <FiCalendar />
            </Button>
          </div>
          <div className={classes.AddTweet_Right_Bottom}>
            <TweetButton
              onClick={sendTweet}
              disabled={props.postLoading}
              type="button"
            >
              Tweet
            </TweetButton>
          </div>
        </div>
      </div>
    </Div>
  );
};

const mapStateToProps = (state) => {
  return {
    postLoading: state.tweets.sendTweetLoading,
    userimg: state.user.user.photo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendTweet: (data) => dispatch(actionTypes.sendTweetStart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTweet);
