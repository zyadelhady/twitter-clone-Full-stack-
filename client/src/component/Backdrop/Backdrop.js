import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = props => {
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}` }}
      onClick={props.clicked}
      className={classes.Backdrop}
    ></div>
  );
};

export default Backdrop;
