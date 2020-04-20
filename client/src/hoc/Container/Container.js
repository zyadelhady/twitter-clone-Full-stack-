import React from 'react';
import classes from './Container.module.scss';

const Container = props => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default Container;
