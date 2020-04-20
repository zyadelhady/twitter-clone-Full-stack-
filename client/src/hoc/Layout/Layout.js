import React from 'react';
import classes from './Layout.module.scss';
import styled from 'styled-components';
import Nav from '../../component/Nav/Nav';
import Container from '../../hoc/Container/Container';
import { Recommnded } from '../../component/Recommnded/Recommnded';

const Layout = (props) => {
  const Div = styled.div`
    background-color: ${({ theme }) => theme.bgPrimary};
    min-height: 100vh;
  `;

  return (
    <Div className={classes.Layout}>
      <Container>
        <div className={classes.GridLayout}>
          <Nav />
          <main className={classes.Margin}>
            <div style={{ width: '175rem' }}>{props.children}</div>
            <Recommnded />
          </main>
        </div>
      </Container>
    </Div>
  );
};

export default Layout;
