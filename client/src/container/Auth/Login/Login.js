import React, { useLayoutEffect, useRef } from 'react';
import classes from '../Auth.module.scss';
import { Input } from '../../../component/Input/Input';
import { FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actions';
import { Link } from 'react-router-dom';
import { Spinner } from '../../../component/Spinner/Spinner';

const Login = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = () => {
    props.getUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const P = styled.p`
    color: ${(props) =>
      props.error ? 'rgb(224, 36, 94)' : props.theme.textPrimary};
    font-size: ${(props) => (props.error ? '1.4rem' : '2rem')};
    font-weight: ${(props) => (props.error ? '500' : '700')};
    margin-bottom: 1rem;
  `;

  const Button = styled.button`
    background-color: ${(props) => props.theme.color};
    outline: none;
    border: none;
    padding: 1rem;
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  `;
  return (
    <div className={classes.Login}>
      {props.loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <div className={classes.Login_Logo}>
            <FaTwitter />
            <P>Log in to Twitter</P>
          </div>

          <div className={classes.Login_Form}>
            {props.error && <P error>{props.error}</P>}
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              value={'demo@gmail.com'}
              refrence={emailRef}
            />
            <Input
              type="password"
              placeholder="Your Password"
              name="password"
              refrence={passwordRef}
              value={'demo1234'}
            />
            <Button onClick={onSubmit} className={classes.Button}>
              Log in
            </Button>
            <Link className={classes.Link} to="/signup">
              Sign Up now
            </Link>
          </div>
        </React.Fragment>
      )}
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
    getUser: (data) => dispatch(actionTypes.getUserSigninStart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
