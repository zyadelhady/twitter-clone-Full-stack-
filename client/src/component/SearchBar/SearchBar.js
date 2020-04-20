import React from 'react';
import classes from './SearchBar.module.scss';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
export const SearchBar = () => {
  const Input = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.bgSecondry};
    padding: 1.1rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.5rem;
    padding-left: 3rem;
    &:focus {
      border: 1px solid ${({ theme }) => theme.color};
    }
  `;
  const Div = styled.div`
    color: ${({ theme }) => theme.textSecondry};

    svg {
      color: currentColor;
      /* padding-left: 0.5rem; */
    }
  `;
  return (
    <div className={classes.SearchBar}>
      <div className={classes.Form}>
        <Div>
          <IoIosSearch />
        </Div>
        <div style={{ width: '100%' }}>
          <Input
            placeholder="search twitter"
            className={classes.SearchBar_Input}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
