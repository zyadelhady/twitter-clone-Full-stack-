import React, { useState } from 'react';
import classes from './Tweet.module.scss';

import styled from 'styled-components';
import { TweetModal } from '../TweetModal/TweetModal';
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Tweet = (props) => {
  const [showModal, setShowModal] = useState(false);
  const P = styled.p`
    color: ${({ theme }) => theme.textPrimary};
    font-weight: ${(props) => (props.paragraph ? '400' : '700')};
    font-family: 'Roboto';
    a {
      color: ${({ theme }) => theme.color};
    }
  `;
  const Span = styled.span`
    color: ${({ theme }) => theme.textSecondry};
    font-weight: 400;
    margin-left: 0.5rem;
  `;
  const Div = styled.div`
    transition: all 0.3s;
    color: ${({ theme }) => theme.textSecondry};

    &:hover {
      background-color: ${({ theme }) => theme.bgHover};
    }
  `;

  let text = props.tweet.replace(
    /((\w+:\/\/\S+)|(\w+[.:]\w+\S+))[^\s,.]/gi,
    (match) => `<a href=${match} target="_blank">${match}</a>`
  );

  return (
    <Div className={classes.Tweet}>
      <div className={classes.TheTweet}>
        <div className={classes.TheTweet_Left}>
          <Link
            to={{
              pathname: `user/${props.handle}`,
            }}
          >
            <img
              onMouseEnter={() => setShowModal(true)}
              onMouseLeave={() => setShowModal(false)}
              alt="user"
              src={`http://127.0.0.1:4000/${props.userimg}`}
            />
          </Link>
          {showModal ? (
            <TweetModal
              name={props.name}
              img={props.userimg}
              handle={props.handle}
            />
          ) : null}
        </div>

        <div className={classes.TheTweet_Right}>
          <div className={classes.TheTweet_Right_Paragraph}>
            <Link
              to={{
                pathname: `user/${props.handle}`,
              }}
            >
              <P style={{ marginBottom: '0.5rem' }}>
                {props.name} <Span>@{props.handle}</Span>
              </P>
            </Link>
            <P
              paragraph
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            ></P>
          </div>

          {props.tweetimg && (
            <Link
              exact
              to={{
                pathname: `/${props.handle}/photo/${props.tweetid}`,
                state: { img: `http://127.0.0.1:4000/${props.tweetimg}` },
              }}
            >
              <div
                style={{
                  backgroundImage: `url(http://127.0.0.1:4000/${props.tweetimg})`,
                }}
                className={classes.TheTweet_Right_Image}
              ></div>
            </Link>
          )}
          {props.children}
          <div className={classes.TheTweet_Right_Buttons}>
            <div className={classes.TheTweet_Right_Buttons_Comment}>
              <FiMessageSquare />
            </div>
            <div className={classes.TheTweet_Right_Buttons_Retweet}>
              <FiRepeat />
            </div>
            <div className={classes.TheTweet_Right_Buttons_Heart}>
              <FiHeart />
            </div>
            <div className={classes.TheTweet_Right_Buttons_Comment}>
              <FiShare />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Border}></div>
    </Div>
  );
};

export default Tweet;
