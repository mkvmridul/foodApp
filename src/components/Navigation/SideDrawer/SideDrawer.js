import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import PropTypes from 'prop-types';

const SideDrawer = (props) => {
      return (
            <Aux>
                  <Backdrop show={props.sideBarState} clicked={props.toggleSideBar}/>
                  <div className={[classes.SideDrawer, props.sideBarState ? classes.Open : classes.Close].join(' ')}>
                        <div className={classes.Logo}>
                              <Logo />
                        </div>
                        <nav>
                              <NavigationItems />
                        </nav>
                  </div>
            </Aux>
      );
};

SideDrawer.propTypes = {
      sideBarState: PropTypes.bool
}

export default SideDrawer;