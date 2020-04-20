import React from 'react';
import classes from './ColorInput.module.scss';
import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

const ColorInput = props => {
  const Span = styled.span`
    height: 4.5rem;
    width: 4.5rem;
    background-color: ${({ id }) => {
      switch (id) {
        case 'blue':
          return 'rgb(29, 161,242)';
        case 'yellow':
          return 'rgb(255, 172, 51)';
        case 'pink':
          return 'rgb(224, 36, 94)';
        case 'purple':
          return 'rgb(121, 75, 196)';
        case 'orange':
          return 'rgb(244, 93, 34)';
        case 'green':
          return 'rgb(23, 191, 99)';
        default:
          return;
      }
    }};
    border-radius: 50%;
    display: inline-block;
    transition: all 0.1s;
    ${({ checked }) =>
      !checked
        ? `
          &:hover {
              transform: scale(1.1);
          }
           `
        : 'transform: scale(0.9);'}
  `;

  return (
    <div className={classes.ColorInput}>
      <input
        type="radio"
        id={props.id}
        name="color"
        className={classes.ColorInput_Input}
        defaultChecked={props.checked}
      />
      <label htmlFor={props.id} className={classes.ColorInput_Label}>
        <Span id={props.id} checked={props.checked}></Span>
        {props.checked ? (
          <div className={classes.ColorInput_Label_Checked}>
            <FiCheck />
          </div>
        ) : null}
      </label>
      <img src={props.img} alt={props.id} className={classes.ColorInput_Img} />
    </div>
  );
};
export default ColorInput;
