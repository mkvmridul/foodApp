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
                  {controls.map((control) => {
                        return <BuildControl key={control.label} label={control.label} type={control.type}/>
                  })}
            </div>
      );
};

export default BuildControls;