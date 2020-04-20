import React from 'react';
import styled from 'styled-components';

const IconButton = styled.div`
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
    border-radius: 10rem;
  }
  svg {
    color: ${({ theme }) => theme.color};
    font-size: 2.3rem;
  }
`;

export const Button = (props) => {
  return (
    <IconButton className={props.className} onClick={props.onClick}>
      {props.children}
    </IconButton>
  );
};
