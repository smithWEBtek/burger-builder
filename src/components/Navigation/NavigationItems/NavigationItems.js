import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>Link1</NavigationItem>
    <NavigationItem>Link2</NavigationItem>
    <NavigationItem>Link3</NavigationItem>
  </ul>
)

export default navigationItems;
