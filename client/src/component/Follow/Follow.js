import React from 'react';
import classes from './Follow.module.scss';
import styled from 'styled-components';
import { FollowItem } from '../FollowItem/FollowItem';
import userImage from '../../assets/MichaelScott.png';
import userImage1 from '../../assets/jim.jpeg';
import userImage2 from '../../assets/dwight.jpg';

export const Follow = () => {
  const Div = styled.div`
    background-color: ${({ theme }) => theme.bgSecondry};
    border-radius: 1.5rem;
    color: ${props => (props.header ? props.theme.color : '')};
    padding: ${props => (props.header ? '1rem' : '')};
    overflow: hidden;
  `;
  const H4 = styled.h4`
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 900;
    font-size: 1.8rem;
  `;
  const DivButton = styled.div`
    color: ${({ theme }) => theme.color};
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s;
    padding: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.bgHover};
    }
    button {
      color: currentColor;
      outline: none;
      border: none;
      background: none;
      font-size: 1.4rem;
      cursor: pointer;
    }
  `;

  return (
    <div className={classes.Follow}>
      <Div className={classes.Follow_BG}>
        <Div header className={classes.Follow_BG_Header}>
          <H4>Who to follow</H4>
        </Div>
        <div className={classes.Border}></div>
        <div className={classes.Follow_BG_Items}>
          <FollowItem
            userImage={userImage}
            handle={'@Michael_scott'}
            name={'michael'}
          />
          <FollowItem
            userImage={userImage1}
            handle={'@Jim_halpet'}
            name={'jim'}
          />
          <FollowItem
            userImage={userImage2}
            handle={'@Dwight_shrute'}
            name={'dwight'}
          />
        </div>
        <DivButton className={classes.Trends_BG_Button}>
          <button>Show more</button>
        </DivButton>
      </Div>
    </div>
  );
};
