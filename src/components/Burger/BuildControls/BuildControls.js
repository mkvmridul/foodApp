import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
      { label: "Meat", type: "Meat" },
      {label: "Bacon", type: "Bacon"},
      {label: "Cheese", type: "Cheese"},
      { label: "Salad", type: "Salad" },
];

const BuildControls = (props) => {
      return (
            <div className={classes.BuildControls}>
                  <p>Price <strong>{props.totalPrice.toFixed(2)}</strong></p>
                  {controls.map((control) => {
                        return <BuildControl 
                                                key={control.label} 
                                                label={control.label} 
                                                addIngredients  = { () => props.addIngredients(control.type)}
                                                removeIngredients  = { () => props.removeIngredients(control.type)}
                                                disabled = {props.ingredientsState[control.type]}
                                          />
                  })}
                  <button className={classes.OrderButton} disabled={!props.purchasable} onClick={()=>props.purchase()}>ORDER NOW</button>
            </div>
      );
};

export default BuildControls;