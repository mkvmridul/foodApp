import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
      return (
            <header className={classes.Toolbar}>
                  <div className={classes.DrawerToggle} onClick={props.toggleSideBar}>
                        <div></div>
                        <div></div>
                        <div></div>
                  </div>
                  <Logo />
                  <nav className={classes.DesktopView}>
                        <NavigationItems/>
                  </nav>
            </header>
      );
};

export default Toolbar;