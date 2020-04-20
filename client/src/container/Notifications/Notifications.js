import React from 'react';
import classes from './Notifications.module.scss';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import { NotificationItem } from '../../component/NotificationItem/NotificationItem';
import jim from '../../assets/jim.jpeg';
import dwight from '../../assets/dwight.jpg';
import michael from '../../assets/MichaelScott.png';

export const Notifications = props => {
  const H4 = styled.h4`
    color: ${props => props.theme.textPrimary};
    font-size: 2rem;
    font-weight: 900;
  `;
  const Div = styled.div`
    padding: 0.9rem;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: ${props => props.theme.hover};
    }
  `;
  const DivHeader = styled.div`
    background-color: ${props => props.theme.bgPrimary};

    color: ${props => props.theme.color};
  `;
  return (
    <div className={classes.Notifications}>
      <DivHeader className={classes.Notifications_Header}>
        <div className={classes.Notifications_Header_Title}>
          <H4>Notifications</H4>
        </div>
        <Div className={classes.Notifications_Header_Icon}>
          <FiSettings />
        </Div>
      </DivHeader>
      <div className={classes.Border}></div>
      <div
        // style={{ marginTop: '10rem' }}
        className={classes.Notifications_Items}
      >
        <NotificationItem
          title={'Recent Tweet from '}
          handle={'Jim halpert'}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed neque aliquam tempora hic voluptatibus
        </NotificationItem>
        <NotificationItem
          title={'your tweet is liked from '}
          handle={'michael scott'}
          src={michael}
          icon="heart"
        />
        <NotificationItem
          title={'your tweet is liked from '}
          handle={'dwight shrute'}
          src={dwight}
          icon="heart"
        />

        <NotificationItem
          title={'Recent Tweet from '}
          handle={'Jim halpert'}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed neque aliquam tempora hic voluptatibus magni eos
          similiqu
        </NotificationItem>
        <NotificationItem
          title={'your tweet is liked from '}
          handle={'Jim halpert'}
          src={jim}
          icon="heart"
        >
          Lorem, ipsum dolor sit amet consectetur ,
        </NotificationItem>
        <NotificationItem
          title={'your tweet is liked from '}
          handle={'dwight shrute'}
          src={dwight}
          icon="heart"
        />
        <NotificationItem
          title={'Recent Tweet from '}
          handle={'Jim halpert'}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed neque aliquam tempora hic voluptatibus magni eos
          similique blanditiis
        </NotificationItem>
        <NotificationItem
          title={'your tweet is liked from '}
          handle={'michael scott'}
          src={michael}
          icon="heart"
        />
        <NotificationItem
          title={'Recent Tweet from '}
          handle={'Jim halpert'}
          src={jim}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellat, ipsum sed
        </NotificationItem>
        <NotificationItem
          title={'Recent Tweet from '}
          handle={'Jim halpert'}
          src={jim}
        >
          tempora hic voluptatibus magni eos similique blanditiis
        </NotificationItem>
        <NotificationItem
          title={'your tweet is liked from '}
          handle={'Jim halpert'}
          src={jim}
          icon="heart"
        >
          Lorem, ipsum dolor sit amet consectetur ,
        </NotificationItem>
      </div>
    </div>
  );
};
