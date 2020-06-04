import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
      const items = Object.keys(props.ingredients).map(
            (itemName) => {
            return <li key={itemName}>{itemName} : {props.ingredients[itemName]}</li>
            }
      );
      return (
            <Aux>
                  <h1>Order Summary</h1>
                  <p>Here are the details of your order Summary</p>
                  <ul>
                        {items}
                  </ul>
                  <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
                  <Button btnType='Danger' clicked={props.cancelPurchase}>Cancel</Button>
                  <Button btnType='Success' clicked={props.continuePurchase}>Proceed</Button>
            </Aux>
      );
};

export default OrderSummary;