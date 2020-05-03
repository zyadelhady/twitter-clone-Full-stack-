import React from 'react';
import classes from './TweetModal.module.scss';
import styled from 'styled-components';
export const TweetModal = (props) => {
  const Div = styled.div`
    background-color: ${(props) => props.theme.bgPrimary};
    box-shadow: ${({ theme }) => `4px 3px 20px 5px ${theme.shadowColor}`};
    padding: 1.8rem;
    border-radius: 1rem;
    width: 28rem;
  `;
  const P = styled.p`
    color: ${(props) =>
      props.primary ? props.theme.textPrimary : props.theme.textSecondry};
    font-size: ${(props) => (props.primary ? '1.5rem' : '1.2rem')};
  `;
  const Button = styled.button`
    border: 1px solid ${({ theme }) => theme.color};
    outline: none;
    background: transparent;
    border-radius: 3rem;
    padding: 0.4rem 1.5rem;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-weight: 900;

    &:hover {
      background: ${({ theme }) => theme.hover};
    }
  `;
  const Span = styled.span`
    color: ${({ theme }) => theme.textSecondry};
    font-weight: 900;
  `;
  return (
    <Div className={classes.TweetModal}>
      <div className={classes.TweetModal_Header}>
        <div className={classes.TweetModal_Header_Photo}>
          <img
            src={`https://twitter-clone-zyad.herokuapp.com/${props.img}`}
            alt="user"
          />
        </div>
        <div className={classes.TweetModal_Header_Button}>
          <Button>Follow</Button>
        </div>
      </div>
      <div className={classes.TweetModal_Name}>
        <div className={classes.TweetModal_Name_Name}>
          <P primary>{props.name}</P>
        </div>
        <div className={classes.TweetModal_Name_Handle}>
          <P>@{props.handle}</P>
        </div>
      </div>
      <div className={classes.TweetModal_Bio}>
        <P primary>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem laudantium
        </P>
      </div>
      <div className={classes.TweetModal_Footer}>
        <div
          className={classes.TweetModal_Footer_Folowing}
          style={{ marginRight: '0.9rem' }}
        >
          <P primary style={{ fontWeight: '900' }}>
            <Span>850</Span> Following
          </P>
        </div>
        <div className={classes.TweetModal_Footer_Followers}>
          <P primary style={{ fontWeight: '900' }}>
            <Span>820K</Span> Followers
          </P>
        </div>
      </div>
    </Div>
  );
};
