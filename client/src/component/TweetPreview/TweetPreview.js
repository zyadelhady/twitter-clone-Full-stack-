import React from 'react';
import styled from 'styled-components';
import classes from './TweetPreview.module.scss';

const TweetPreview = props => {
  const Span = styled.span`
    color: ${({ theme }) => theme.textSecondry};
    font-weight: 300;
    margin-left: 1rem;
  `;
  const H4 = styled.h4`
    color: ${({ theme }) => theme.textPrimary};
  `;
  const P = styled.p`
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Roboto';
  `;
  return (
    <div className={classes.TweetPreview}>
      <div className={classes.TweetPreview_Img}>
        <img src={props.userimg} alt="preview" />
      </div>
      <div className={classes.TweetPreview_Content}>
        <div className={classes.TweetPreview_Content_Info}>
          <H4>
            {props.name}
            <Span>@{props.handle}</Span>
          </H4>
        </div>
        <div className={classes.TweetPreview_Content_Text}>
          <P>{props.children}</P>
        </div>
      </div>
    </div>
  );
};
export default TweetPreview;
