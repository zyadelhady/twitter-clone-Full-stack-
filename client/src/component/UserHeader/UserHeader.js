import React from 'react';
import styled from 'styled-components';
import classes from './UserHeader.module.scss';
import { useSelector } from 'react-redux';

const Img = styled.img`
  border: 4.5px solid ${({ theme }) => theme.bgPrimary};
`;

const P = styled.p`
  color: ${(props) =>
    props.secondary ? props.theme.textSecondry : props.theme.textPrimary};

  font-size: ${(props) => (props.secondary ? '1.5rem' : '2rem')};
  font-weight: ${(props) => (props.secondary ? '400' : '700')};
  margin-top: ${(props) => (props.secondary ? '.4rem' : '')};
`;

const ProfileButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color};
  outline: none;
  background: transparent;
  border-radius: 3rem;
  padding: 0.8rem 1.5rem;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  font-weight: 900;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Bio = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const UserHeader = (props) => {
  const userSelf = useSelector((state) => state.user.user.username);

  return (
    <div className={classes.UserHeader}>
      <div className={classes.UserHeader_Cover}>
        <input id="coverImage" type="file" onChange={props.getCoverImage} />
        <label htmlFor="coverImage">
          <img
            src={`http://127.0.0.1:4000/${props.user.cover}`}
            alt="user cover"
          />
        </label>
      </div>
      <div className={classes.UserHeader_Photo}>
        <div className={classes.UserHeader_Photo_Image}>
          <input id="userImage" type="file" onChange={props.getUserImage} />
          <label htmlFor="userImage">
            <Img src={`http://127.0.0.1:4000/${props.user.photo}`} alt="user" />
          </label>
        </div>
        {props.username === userSelf ? (
          <div className={classes.UserHeader_Photo_Button}>
            <ProfileButton>Edit Profile</ProfileButton>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={classes.UserHeader_Name}>
        <P>{props.user.name}</P>
        <P secondary>@{props.username}</P>
        <Bio>welcome to my profile</Bio>
      </div>
    </div>
  );
};
