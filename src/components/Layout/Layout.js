import React from 'react';
import Aux from '.././../hoc/Aux';
import classes from './Layout.module.css';

const Layout = (props) => (
  <Aux>
    <h3>Toolbar</h3>
    <hr />
    <h3>SideDrawer, Backdrop</h3>
    <hr />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
