import React from 'react';
import classes from './NavModal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import userImage from '../../assets/MichaelScott.png';
import Container from '../../hoc/Container/Container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TiFolder } from 'react-icons/ti';
import { GiElectric } from 'react-icons/gi';
import { FaBattleNet } from 'react-icons/fa';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import {
  FiEdit,
  FiExternalLink,
  FiSettings,
  FiHelpCircle,
} from 'react-icons/fi';
import { IoIosPulse } from 'react-icons/io';

const NavModal = (props) => {
  const Div = styled.div`
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: ${({ theme }) => `4px 3px 20px 5px ${theme.shadowColor}`};

    width: 24.7rem;
    border-radius: 0.9rem;
  `;

  const P = styled.p`
    color: ${(props) =>
      props.primary ? props.theme.textPrimary : props.theme.textSecondry};
    margin-top: ${(props) => (props.topics ? '0' : '0.5rem')};
    font-size: ${(props) => (props.primary ? '1.7rem' : '1.4rem')};
    font-family: 'Roboto', 'sans-serif';
  `;

  const A = styled.a`
    color: ${(props) => props.theme.textSecondry};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Cairo', 'sans-serif';
    cursor: pointer;
    padding: 1.6rem 1.8rem;
    transition: all 0.3s;
    overflow: hidden;
    &:hover {
      background-color: ${({ theme }) => theme.bgHover};
    }
  `;

  return (
    <div className={classes.NavModal}>
      <Backdrop bgColor={`transparent`} clicked={props.showModal} />
      <Container>
        <Div onClick={props.showModal} className={classes.NavModal_Modal}>
          <div className={classes.NavModal_Modal_Photo}>
            <img alt="user" src={userImage} />
            <P primary>michael</P>
            <P>@Michael_scott</P>
          </div>
          <div className={classes.Border}></div>
          <div className={classes.NavModal_Topics}>
            <A>
              <TiFolder className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Topics
              </P>
            </A>
            <A>
              <GiElectric className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Momments
              </P>
            </A>
            <A>
              <FaBattleNet className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Promote Mode
              </P>
            </A>
            <A>
              <FiExternalLink className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Twitter Ads
              </P>
            </A>
            <A>
              <IoIosPulse className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Analytics
              </P>
            </A>
            <div className={classes.Border}></div>
            <A>
              <FiSettings className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Settings and privacy
              </P>
            </A>
            <A>
              <FiHelpCircle className={classes.NavModal_Topics_Svg} />
              <P primary topics>
                Help Center
              </P>
            </A>
            <NavLink to="/display">
              <A>
                <FiEdit className={classes.NavModal_Topics_Svg} />
                <P primary topics>
                  Display
                </P>
              </A>
            </NavLink>
            <div className={classes.Border}></div>
            <A onClick={props.logout}>
              <P primary topics>
                Log out
              </P>
            </A>
          </div>
        </Div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.user.error,
    user: state.user.user,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionTypes.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavModal);
