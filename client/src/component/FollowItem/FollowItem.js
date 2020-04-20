import React from 'react';
import classes from './FollowItem.module.scss';
import styled from 'styled-components';

export const FollowItem = props => {
  const Div = styled.div`
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.bgHover};
    }
    color: ${props =>
      props.Header ? props.theme.textSecondry : props.textPrimary};
    padding: ${props => (props.Header ? '0.5rem' : '')};
    border-radius: ${props => (props.Header ? '3rem' : '')};
    display: flex;

    &:hover {
      color: ${props => (props.Header ? props.theme.color : '')};
      background-color: ${props => (props.Header ? props.theme.hover : '')};
    }
  `;
  const P = styled.p`
    color: ${props =>
      props.secondry ? props.theme.textSecondry : props.theme.textPrimary};
    font-size: ${props => (props.secondry ? '1.2rem' : '1.5rem')};
    margin-bottom: ${props => (props.secondry ? '' : '0.5rem')};
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
  return (
    <div>
      <Div className={classes.FollowItem}>
        <div className={classes.FollowItem_Image}>
          <img alt="user" src={props.userImage} />
        </div>
        <div style={{ width: '100%' }} className={classes.FollowItem_Text}>
          <P>{props.name}</P>
          <P secondry>{props.handle}</P>
        </div>
        <div className={classes.FollowItem_Button}>
          <Button>Follow</Button>
        </div>
      </Div>
      <div className={classes.Border}></div>
    </div>
  );
};
