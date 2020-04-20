import React from 'react';
import classes from './Trends.module.scss';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import { TrendsItem } from '../TrendsItem/TrendsItem';
export const Trends = () => {
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
  const SvgDiv = styled.div`
    padding: 0.7rem;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.hover};
    }
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
    <div className={classes.Trends}>
      <Div className={classes.Trends_BG}>
        <Div header className={classes.Trends_BG_Header}>
          <H4>Trends for you</H4>
          <SvgDiv className={classes.Trends_BG_Header_SVG}>
            <FiSettings />
          </SvgDiv>
        </Div>
        <div className={classes.Border}></div>
        <div className={classes.Trends_BG_Items}>
          <TrendsItem
            header={'1.Trending'}
            text={'#BEETS_FARM'}
            numbers={'325K Tweets'}
          />
          <TrendsItem
            header={'1.Trending'}
            text={'#THE_OFFICE'}
            numbers={'488K Tweets'}
          />
          <TrendsItem
            header={'2.Trending'}
            text={'#PAM_BEESLEY'}
            numbers={'22.7K Tweets'}
          />
          <TrendsItem
            header={'3.Trending'}
            text={'#JIM_HALPERT'}
            numbers={'598 Tweets'}
          />
          <TrendsItem
            header={'4.Trending'}
            text={'#DWIGHT_SHRUTE'}
            numbers={'71K Tweets'}
          />
        </div>
        <DivButton className={classes.Trends_BG_Button}>
          <button>Show more</button>
        </DivButton>
      </Div>
    </div>
  );
};
