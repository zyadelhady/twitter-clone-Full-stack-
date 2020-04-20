import React from 'react';
import classes from './Recommnded.module.scss';
import { Trends } from '../Trends/Trends';
import { SearchBar } from '../SearchBar/SearchBar';
import { Follow } from '../Follow/Follow';
import styled from 'styled-components';
export const Recommnded = () => {
  const P = styled.p`
    color: ${({ theme }) => theme.textSecondry};
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.textSecondry};
    }
  `;
  return (
    <div className={classes.Recommnded}>
      <SearchBar />
      <Trends />
      <Follow />
      <P style={{ marginLeft: '3rem', marginTop: '88rem', position: 'fixed' }}>
        &copy; 2020 by zyad elhady
      </P>
    </div>
  );
};
