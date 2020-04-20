import React from 'react';
import classes from './NotificationItem.module.scss';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';

export const NotificationItem = props => {
  const Div = styled.div`
    background-color: transparent;
    &:hover {
      background-color: ${props => props.theme.bgHover};
    }
    padding: 1rem 1.5rem;
    transition: all 0.4s;
    display: flex;
  `;
  const P = styled.p`
    color: ${props =>
      props.secondry ? props.theme.textSecondry : props.theme.textPrimary};
    font-size: 1.3rem;
  `;
  const Span = styled.span`
    color: ${props => props.theme.textPrimary};
    font-size: 1.5rem;
    font-weight: 700;
  `;
  const Span2 = styled.span`
    color: ${props => props.theme.textSecondry};
    font-size: 1.3rem;
  `;

  return (
    <React.Fragment>
      <Div className={classes.NotificationItem}>
        <div className={classes.NotificationItem_Left}>
          {props.icon === 'heart' ? (
            <AiFillHeart className={classes.NotificationItem_Left_Heart} />
          ) : (
            <MdNotifications
              className={classes.NotificationItem_Left_Notification}
            />
          )}
        </div>
        <div className={classes.NotificationItem_Right}>
          <div className={classes.NotificationItem_Right_Image}>
            <img src={props.src} alt="user" />
          </div>
          <div className={classes.NotificationItem_Right_Title}>
            <P>
              {props.title}
              <Span>{props.handle}</Span>
            </P>
          </div>
          {props.children && (
            <P className={classes.NotificationItem_Right_Tweet}>
              <Span2>{props.children}</Span2>
            </P>
          )}
        </div>
      </Div>
      <div className={classes.Border}></div>
    </React.Fragment>
  );
};
