import React from 'react';
import classes from './TrendsItem.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

export const TrendsItem = props => {
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
    display: ${props => (props.Header ? 'flex' : '')};

    &:hover {
      color: ${props => (props.Header ? props.theme.color : '')};
      background-color: ${props => (props.Header ? props.theme.hover : '')};
    }
  `;

  const P = styled.p`
    color: ${props =>
      props.Secondry ? props.theme.textSecondry : props.theme.textPrimary};
    font-size: ${props => (props.Secondry ? '1.2rem' : '1.5rem')};
    font-weight: 700;
  `;

  return (
    <React.Fragment>
      <Div className={classes.TrendsItem}>
        <Div className={classes.TrendsItem_Header}>
          <P Secondry>{props.header}</P>
          <Div Header>
            <IoIosArrowDown />
          </Div>
        </Div>
        <div className={classes.TrendsItem_Text}>
          <P>{props.text}</P>
        </div>
        <div
          style={{ marginBottom: '0.5rem' }}
          className={classes.TrendsItem_tweets}
        >
          <P Secondry>{props.numbers}</P>
        </div>
      </Div>
      <div className={classes.Border}></div>
    </React.Fragment>
  );
};
