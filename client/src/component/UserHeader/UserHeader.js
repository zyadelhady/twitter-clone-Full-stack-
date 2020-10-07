import React from 'react';
import styled from 'styled-components';
import classes from './UserHeader.module.scss';
import { useSelector } from 'react-redux';
import { FiCamera } from 'react-icons/fi';

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

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.color};
  outline: none;
  background: ${(props) => (props.trans ? 'transparent' : props.theme.color)};
  transition: all 0.3s;
  border-radius: 3rem;
  padding: 0.8rem 1.5rem;
  color: ${(props) =>
    props.trans ? props.theme.color : props.theme.textPrimary};
  cursor: pointer;
  font-weight: 900;
  margin-right: ${(props) => (props.margin ? '1.5rem' : '0')};
  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Bio = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 1rem;

  a {
    color: ${(props) => props.theme.color};
  }
`;

const I = styled.i`
  top: -1rem;
  left: 9rem;
  @media (max-width: 700px) {
    top: 1.3rem;
    left: 7rem;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.bgSecondry};
  border: none;
  margin-bottom: 1.7rem;
  padding: 1.4rem;
  outline: none;

  font-size: 1.7rem;
  color: ${(props) => props.theme.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.textSecondry};
`;

export const UserHeader = {
  Default: (props) => {
    let userBio = props.user.Bio.replace(
      /((\w+:\/\/\S+)|(\w+[.:]\w+\S+))[^\s,.]/gi,
      (match) => `<a href=${match} target="_blank">${match}</a>`
    );

    const userSelf = useSelector((state) => state.user.user.username);

    return (
      <div className={classes.UserHeader}>
        <div className={classes.UserHeader_Cover}>
          <img src={props.user.cover} alt="user cover" />
        </div>
        <div className={classes.UserHeader_Photo}>
          <div className={classes.UserHeader_Photo_Image}>
            <Img src={props.user.photo} alt="user" />
          </div>
          {props.username === userSelf ? (
            <div className={classes.UserHeader_Photo_Button}>
              <Button trans onClick={props.EditProfile}>
                Edit Profile
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={classes.UserHeader_Name}>
          <P>{props.user.name}</P>
          <P secondary>@{props.username}</P>
          <Bio
            dangerouslySetInnerHTML={{
              __html: userBio,
            }}
          ></Bio>
        </div>
      </div>
    );
  },
  Edit: (props) => {
    const userSelf = useSelector((state) => state.user.user.username);

    return (
      <div className={classes.UserHeader}>
        <div className={classes.UserHeader_Cover}>
          <input id="coverImage" type="file" onChange={props.getCoverImage} />
          <label className={classes.UserHeader_Label} htmlFor="coverImage">
            <i className={classes.UserHeader_Label_ImageIcon}>
              <FiCamera />
            </i>
            <img
              src={props.coverImage ? props.coverImage : props.user.cover}
              alt="user cover"
            />
          </label>
        </div>
        <div className={classes.UserHeader_Photo}>
          <div className={classes.UserHeader_Photo_Image}>
            <input id="userImage" type="file" onChange={props.getUserImage} />
            <label className={classes.UserHeader_Label} htmlFor="userImage">
              <I className={classes.UserHeader_Label_ImageIcon}>
                <FiCamera />
              </I>
              <Img
                src={props.previewImage ? props.previewImage : props.user.photo}
                alt="user"
              />
            </label>
          </div>
          {props.username === userSelf ? (
            <div className={classes.UserHeader_Photo_Button}>
              <Button trans margin onClick={props.closeEdit}>
                cancel
              </Button>
              <Button onClick={props.saveEdit}>save</Button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={classes.UserHeader_Inputs}>
          <Input
            onChange={props.nameChange}
            ref={props.nameRef}
            type="text"
            placeholder="Your Name"
            name="name"
            defaultValue={props.user.name}
          />
          <Input
            onChange={props.emailChange}
            ref={props.emailRef}
            type="text"
            placeholder="Your email"
            name="email"
            defaultValue={props.user.email}
          />
          <Input
            onChange={props.bioChange}
            ref={props.bioRef}
            type="text"
            placeholder="Your Bio"
            name="Bio"
            defaultValue={props.user.Bio}
          />
        </div>
      </div>
    );
  },
};
