import React, { useCallback } from 'react';
import classes from './DisplayModal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import { connect } from 'react-redux';

import styled from 'styled-components';
import TweetPreview from '../TweetPreview/TweetPreview';
import userImage from '../../assets/MichaelScott.png';
import ColorInput from '../ColorInput/ColorInput';
import blue from '../../assets/blue.svg';
import yellow from '../../assets/yellow.svg';
import pink from '../../assets/pink.svg';
import orange from '../../assets/orange.svg';
import green from '../../assets/green.svg';
import purple from '../../assets/purple.svg';
import BackgroundInput from '../BackgroundInput/BackgroundInput';
import * as actionTypes from '../../store/actions/actions';
import { useHistory } from 'react-router-dom';

const DisplayModal = props => {
  const colors = [
    { id: 'blue', img: blue },
    { id: 'yellow', img: yellow },
    { id: 'pink', img: pink },
    { id: 'purple', img: purple },
    { id: 'orange', img: orange },
    { id: 'green', img: green }
  ];
  const changeBackground = props.changeBackground;
  const changeColor = props.changeColor;

  const GetBgColor = useCallback(
    e => {
      changeBackground(e.target.id);
    },
    [changeBackground]
  );

  const getColor = useCallback(
    e => {
      changeColor(e.target.id);
    },
    [changeColor]
  );
  const Div = styled.div`
    background-color: ${props =>
      props.secondry ? props.theme.bgSecondry : props.theme.bgPrimary};
    z-index: 300;
    width: ${props => (props.secondry ? '' : '65rem')};
    margin-bottom: 1rem;
  `;
  const H4 = styled.h4`
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 900;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  `;

  const P = styled.p`
    color: ${({ theme }) => theme.textSecondry};
    font-size: ${props => (props.title ? '1.5rem' : '1.8rem')};
    font-weight: ${props => (props.title ? '900' : '400')};
    margin-bottom: 1rem;
  `;
  const Button = styled.button`
    background-color: ${({ theme }) => theme.color};
    color: #fff;
    font-size: 1.7rem;
    font-weight: 700;
    padding: 1rem 1.8rem;
    outline: none;
    border: none;
    cursor: pointer;
    align-self: center;
    border-radius: 3rem;
  `;
  let { goBack } = useHistory();
  const go = () => {
    goBack();
  };
  return (
    <div className={classes.DisplayContainer}>
      <Backdrop clicked={goBack} bgColor={`#6e767d66`} />
      <Div className={classes.DisplayModal}>
        <div className={classes.DisplayModal_Header}>
          <H4>Customize your view</H4>
          <P>
            Display settings affect all of your Twitter accounts on this
            browser. These settings are only visible to you.
          </P>
        </div>
        <div
          style={{ marginBottom: '1rem' }}
          className={classes.DisplayModal_Tweet}
        >
          <TweetPreview
            userimg={userImage}
            name="michael"
            handle="Michael_scott"
          >
            At the heart of Twitter are short messages called Tweets — just like
            this one — which can include photos, videos, links, text, and
          </TweetPreview>
        </div>
        <div className={classes.DisplayModal_Section}>
          <div className={classes.DisplayModal_Section_Title}>
            <P title="true">color</P>
          </div>
          <Div secondry className={classes.DisplayModal_Section_BGS}>
            <form
              onClick={e => getColor(e)}
              className={classes.DisplayModal_Section_BGS_Form}
            >
              {colors.map(color => (
                <ColorInput
                  key={color.id}
                  id={color.id}
                  img={color.img}
                  checked={color.id === props.color}
                />
              ))}
            </form>
          </Div>
          <div className={classes.DisplayModal_Section_Title}>
            <P title="true">Background</P>
          </div>
          <Div secondry className={classes.DisplayModal_Section_BGS}>
            <form
              onChange={e => GetBgColor(e)}
              className={classes.DisplayModal_Section_BGS_BG}
            >
              <BackgroundInput
                id="LIGHT_MODE"
                name="Default"
                checked={props.background === 'LIGHT_MODE'}
              />
              <BackgroundInput
                id="DIM_MODE"
                name="Dim"
                checked={props.background === 'DIM_MODE'}
              />
              <BackgroundInput
                id="DARK_MODE"
                name="Lights out"
                checked={props.background === 'DARK_MODE'}
              />
            </form>
          </Div>
          <Button onClick={go}>Done</Button>
        </div>
      </Div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    background: state.themes.background,
    color: state.themes.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeBackground: background =>
      dispatch(actionTypes.changeBackground(background)),
    changeColor: color => dispatch(actionTypes.changeColor(color))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayModal);
