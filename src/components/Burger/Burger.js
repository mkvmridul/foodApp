import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

 const Burger = props => {
       const ingredients = Object.keys(props.ingredients).map( (igKey) => {
             return [...Array(props.ingredients[igKey])].map((_, i) => {
                   return <BurgerIngredients key={igKey + i} type={igKey} />
             });
       }).reduce((arr, el) => {
             return arr.concat(el);
       }, []);
      return (
            <div className={classes.Burger}>
                  <BurgerIngredients type="BreadTop" />
                  {(ingredients.length === 0) ? <p>please add ingredients</p> : ingredients}
                  <BurgerIngredients type="BreadBottom"/>
            </div>
      );
}

 export default Burger;