import React from 'react';
import classes from './Input.module.scss';
import styled from 'styled-components';

const UserInput = styled.input`
  background-color: ${(props) => props.theme.bgSecondry};
  border: none;
  margin-bottom: 1.7rem;
  padding: 1.4rem;
  outline: none;

  font-size: 1.7rem;
  color: ${(props) => props.theme.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.textSecondry};
`;

export const Input = (props) => {
  return (
    <UserInput
      className={classes.Input}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      ref={props.refrence}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      // value={props.value}
    />
  );
};
