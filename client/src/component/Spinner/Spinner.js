import React from 'react';
import classes from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={classes.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
