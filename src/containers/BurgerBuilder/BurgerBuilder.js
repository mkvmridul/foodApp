import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Layout/Burger/Burger';
import BurgerControls from '../../components/Layout/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
      state = {
            ingredients: {
                  Salad: 0,
                  Bacon: 0,
                  Cheese: 0,
                  Meat: 1 
            } 
      }
      render() {
            return (
                  <Aux>
                        <Burger ingredients={this.state.ingredients}/>
                        <BurgerControls />
                  </Aux>
            );
      }
}

export default BurgerBuilder;