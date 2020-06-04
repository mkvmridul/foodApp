import React from 'react';
import classes from './Logo.module.css';
import logoImage from '../../assets/images/logo.png';

const Logo = () => {
      return (
            <div className={classes.Logo}>
                  <img src={logoImage} alt="myBurger"/>
            </div>
      );
};

export default Logo;