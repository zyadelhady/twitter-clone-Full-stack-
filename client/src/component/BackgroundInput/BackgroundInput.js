import React from 'react';
import styled from 'styled-components';
import classes from './BackgroundInput.module.scss';

const BackgroundInput = props => {
  const Label = styled.label`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    min-width: 16rem;
    width: 100%;
    cursor: pointer;
    position: relative;
    font-weight: 500;
    ${({ id }) => {
      switch (id) {
        case 'LIGHT_MODE':
          return 'background-color:rgb(255, 255, 255);color:rgb(20, 23, 26);';
        case 'DIM_MODE':
          return 'background-color:rgb(21, 32, 43);color:rgb(255, 255, 255);';
        case 'DARK_MODE':
          return 'background-color:rgb(0,0,0);color:rgb(217, 217, 217);';
        default:
          return;
      }
    }}
    border-radius: 0.5rem;
    border: 2px solid rgba(204, 204, 204, 0.2);

    ${({ theme, checked }) => checked && `border: 2px solid ${theme.color};`}
  `;

  const Span = styled.span`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: inline-block;
    transition: all 0.1s;
    border: 2.5px solid rgba(204, 204, 204, 0.2);
    ${({ theme, checked }) =>
      checked &&
      `border: 2.5px solid ${theme.color};background-color:${theme.color} !important;`}

    @media only screen and (max-width: 1024px) {
      position: absolute;
      top: 7px;
    }
  `;

  return (
    <div className={classes.BackgroundInput}>
      <input
        type="radio"
        id={props.id}
        name="background"
        className={classes.BackgroundInput_Input}
        defaultChecked={props.checked}
      />
      <Label
        htmlFor={props.id}
        className={classes.BackgroundInput_Label}
        id={props.id}
        checked={props.checked}
      >
        <div className={classes.BackgroundInput_Label_Icon}>
          <Span checked={props.checked}></Span>
        </div>

        <p className={classes.BackgroundInput_Label_Name}>{props.name}</p>
      </Label>
    </div>
  );
};
export default BackgroundInput;
