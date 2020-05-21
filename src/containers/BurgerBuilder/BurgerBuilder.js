import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Layout/Burger/Burger';

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
                        <div>
                              <Burger ingredients={this.state.ingredients}/>
                        </div>
                        <div>
                              controls
                        </div>
                  </Aux>
            );
      }
}

export default BurgerBuilder;