import React from 'react';
import Aux from '.././../hoc/Aux';
import classes from './Layout.module.css';

const Layout = (props) => (
  <Aux>
    <h3 className={classes.NavItem}>Toolbar</h3>
    <hr />
    <h3 className={classes.NavItem}>SideDrawer, Backdrop</h3>
    <hr />
    <h3 className={classes.NavItem}>Burger Builder</h3>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
