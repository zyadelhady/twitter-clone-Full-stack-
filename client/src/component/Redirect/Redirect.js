import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    error: state.user.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUser: (data) => dispatch(actionTypes.getUserSignupStart(data)),
//   };
// };

export const Redirect = connect(mapStateToProps)((props) => {
  const history = useHistory();
  console.log(history);

  useEffect(() => {
    if (props.user) {
      history.push('/home');
    } else if (!props.user) {
      history.push('/login');
    }
  }, [history, props.user]);

  return <div></div>;
});
