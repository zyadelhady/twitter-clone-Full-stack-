import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavModal from '../../component/NavModal/NavModal';
import { connect } from 'react-redux';

import { FaTwitter, FaRegBookmark } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { FiHash, FiMail, FiMoreHorizontal } from 'react-icons/fi';
import { IoMdNotificationsOutline, IoIosList, IoIosAdd } from 'react-icons/io';
const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  const { pathname } = useLocation();

  const Li = styled.li`
    color: ${(props) =>
      props.selected ? props.theme.color : props.theme.textPrimary};
    list-style: none;
    padding: 0.8rem 1.7rem;
    border-radius: 3.5rem;
    font-weight: 900;
    margin-bottom: 1.4rem;
    text-decoration: none;
    outline: none;
    cursor: pointer;

    img {
      border: ${(props) =>
        props.selected ? `2px solid ${props.theme.color}` : ''};
    }

    &:hover {
      background-color: ${({ theme }) => theme.hover};
      color: ${({ theme }) => theme.color};
    }

    &:last-of-type {
      background: none;
      text-decoration: none;
      list-style: none;
      user-select: none;
    }
    &:first-of-type {
      background: none;
      color: ${({ theme }) => theme.textPrimary};
      padding: 0.8rem;
      margin-left: 1rem;
      &:hover {
        background-color: rgba(29, 161, 242, 0.07);
        border-radius: 50%;
      }
    }
  `;

  const Button = styled.button`
    color: #fff;
    background-color: ${({ theme }) => theme.color};
    outline: none;
    border: none;
    padding: 1.5rem 7.8rem;
    border-radius: 3.5rem;
    -webkit-touch-callout: none;
    cursor: pointer;
    h4 {
      font-size: 1.5rem;
      font-weight: 700;
    }
    svg {
      display: none;
    }
    @media (max-width: 1024px) {
      position: relative;
      top: 0;
      left: -0.7rem;
      padding: 0.8rem 0.8rem;
      border-radius: 50%;
      h4 {
        display: none;
      }
      svg {
        display: block;
        font-size: 2.5rem;
      }
    }
  `;

  return (
    <div className={classes.Nav}>
      <nav>
        <ul>
          <Li>
            <NavLink className={classes.Nav_link} to="/home">
              <FaTwitter />
            </NavLink>
          </Li>
          <Li selected={pathname === '/home' ? true : false}>
            <NavLink className={classes.Nav_link} to="/home">
              <GoHome />
              <p className={classes.Nav_link_Title}>Home</p>
            </NavLink>
          </Li>
          <Li selected={pathname === '/explore' ? true : false}>
            <NavLink className={classes.Nav_link} to="/explore">
              <FiHash />
              <p className={classes.Nav_link_Title}>Explore</p>
            </NavLink>
          </Li>
          <Li selected={pathname === '/notifications' ? true : false}>
            <NavLink className={classes.Nav_link} to="/notifications">
              <IoMdNotificationsOutline />
              <p className={classes.Nav_link_Title}>Notifications</p>
            </NavLink>
          </Li>
          <Li selected={pathname === '/messages' ? true : false}>
            <NavLink className={classes.Nav_link} to="/messages">
              <FiMail />
              <p className={classes.Nav_link_Title}>Messages</p>
            </NavLink>
          </Li>
          <Li selected={pathname === '/bookmarks' ? true : false}>
            <NavLink className={classes.Nav_link} to="/bookmarks">
              <FaRegBookmark />
              <p className={classes.Nav_link_Title}>Bookmarks</p>
            </NavLink>
          </Li>
          <Li selected={pathname === '/lists' ? true : false}>
            <NavLink className={classes.Nav_link} to="/lists">
              <IoIosList />
              <p className={classes.Nav_link_Title}>Lists</p>
            </NavLink>
          </Li>
          <Li selected={pathname === `/user/${props.username}` ? true : false}>
            <NavLink
              className={classes.Nav_link}
              to={`/user/${props.username}`}
            >
              <img alt="user" src={props.image} />
              <p className={classes.Nav_link_Title}>Profile</p>
            </NavLink>
          </Li>
          <Li>
            <button
              onClick={showModal}
              className={`${classes.Nav_link} ${classes.Btn}`}
            >
              <FiMoreHorizontal />
              <p className={classes.Nav_link_Title}>More</p>
            </button>
          </Li>
          <Li>
            <Button>
              <h4>Tweet</h4>
              <IoIosAdd />
            </Button>
          </Li>
        </ul>
      </nav>
      {isOpen ? <NavModal showModal={showModal} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    image: state.user.user.photo,
    username: state.user.user.username,
  };
};

export default connect(mapStateToProps)(Nav);
