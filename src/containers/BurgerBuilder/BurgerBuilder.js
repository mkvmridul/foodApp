import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENTS_PRICE = {
      Salad: 0.4,
      Bacon: 0.1,
      Cheese: 0.2,
      Meat: 1
}

class BurgerBuilder extends Component {
      state = {
            ingredients: {
                  Salad: 0,
                  Bacon: 0,
                  Cheese: 0,
                  Meat: 0
            } ,
            totalPrice: 4,
            purchasable: false,
            purchasing: false
      }
      
      updateIngredients = (ingredients) => {
            const sum = Object.keys(ingredients).map((item) => {
                  return ingredients[item];
            }).reduce((sum,item) => {
                  return sum+item;
            },0)
            this.setState({ purchasable: sum > 0});
      }

      addIngredientsHandler = (type) => {

            const ingredients = {
                  ...this.state.ingredients
            }
            ingredients[type] += 1;

            let totalPrice = this.state.totalPrice;
            totalPrice = totalPrice+INGREDIENTS_PRICE[type];

            this.setState({ ingredients: ingredients, totalPrice: totalPrice });
            this.updateIngredients(ingredients);
      }

      removeIngredientsHandler = (type) => {
            const ingredients = {
                  ...this.state.ingredients
            }
            if(ingredients[type] > 0){
                  let totalPrice = this.state.totalPrice;
                  ingredients[type] -= 1;
                  totalPrice = totalPrice - INGREDIENTS_PRICE[type];
                  this.setState({ ingredients: ingredients, totalPrice: totalPrice });
                  this.updateIngredients(ingredients);
            }

      }

      togglePurchase = () => {
            this.setState({
                  purchasing: !this.state.purchasing
            });
      }

      continuePurchaseHandler = () => {
            alert('happy shopping');
      }

      render() {
            const ingredientsState = {...this.state.ingredients}
            for (let key in ingredientsState ) {
                  ingredientsState[key] = ingredientsState[key] <= 0;
            }

            return (
                  <Aux>
                        <Burger ingredients={this.state.ingredients}/>
                        <Modal show={this.state.purchasing} closeModal={this.togglePurchase}>
                              <OrderSummary 
                                    ingredients={this.state.ingredients} 
                                    cancelPurchase={this.togglePurchase}
                                    continuePurchase={this.continuePurchaseHandler}
                                    totalPrice={this.state.totalPrice}
                                    />
                        </Modal>
                        <BurgerControls 
                              addIngredients={this.addIngredientsHandler} 
                              removeIngredients={this.removeIngredientsHandler}
                              ingredientsState={ingredientsState}
                              totalPrice={this.state.totalPrice}
                              purchasable={this.state.purchasable}
                              purchase={this.togglePurchase}
                              />
                  </Aux>
            );
      }
}

export default BurgerBuilder;