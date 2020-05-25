import React from 'react';
import classes from "./BuildControl.module.css";
import PropTypes from 'prop-types';

const BuildControl = (props) => {
      return (
            <div className={classes.BuildControl}>
                  <div className={classes.Label}>{props.label}</div>
                  <button className={classes.Less}>Less</button>
                  <button className={classes.More}>More</button>
            </div>
      );
}

BuildControl.propTypes = {
      label: PropTypes.string.isRequired
}

export default BuildControl;