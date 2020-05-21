import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredients.module.css';

const BurgerIngredients = props => {
      return  <div className={classes[props.type]}></div>
}

BurgerIngredients.propTypes = {
      type: PropTypes.string.isRequired
};

export default BurgerIngredients;