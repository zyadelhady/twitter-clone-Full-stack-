import React from 'react';
import classes from './PhotoModal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import { useHistory, useLocation } from 'react-router-dom';

export const PhotoModal = () => {
  const { state } = useLocation();
  let { goBack } = useHistory();

  return (
    <React.Fragment>
      <div className={classes.PhotoModal}>
        <Backdrop clicked={goBack} bgColor={`rgb(0, 0, 0, 0.9)`} />
        <div className={classes.PhotoModal_Photo}>
          <img src={state.img} alt="bg" />
        </div>
      </div>
    </React.Fragment>
  );
};
