import React from 'react';
import classes from '../Auth.module.scss';
import { useForm } from 'react-hook-form';
import { Input } from '../../../component/Input/Input';
import { FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actions';
import { Link } from 'react-router-dom';
import { Spinner } from '../../../component/Spinner/Spinner';

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    props.getUser(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.Login_Logo}>
              <FaTwitter />
              <P>Log in to Twitter</P>
            </div>

            <div className={classes.Login_Form}>
              {props.error && <P error>{props.error}</P>}
              {errors.email && <P error>Your email is required</P>}
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                refrence={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.password && <P error>Your password is required</P>}
              <Input
                type="password"
                placeholder="Your Password"
                name="password"
                refrence={register({ required: true })}
              />

              <Button className={classes.Button}>Log in</Button>
              <Link className={classes.Link} to="/signup">
                Sign Up now
              </Link>
            </div>
          </form>
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
