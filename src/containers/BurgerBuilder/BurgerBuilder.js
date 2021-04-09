import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  cheese: 0.4,
  bacon: 0.7,
  salad: 0.5,
  meat: 1.3
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchasable: true
    })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] === 0) {
      return;
    }
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = updatedIngredients[type] === this.state.ingredients[type] ? oldPrice : oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
    this.setState({ purchasable: sum > 0 })
  }

  purchaseContinuedHandler = () => {
    alert('you continued!')
    this.setState({ purchasing: true })
  }

  purchaseOrderHandler = () => {
    this.setState({ purchasing: true })
  }

  purchasedCancelledHandler = () => {
    this.setState({ purchasing: false })
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasedCancelledHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchasedCancelledHandler}
            purchaseContinued={this.purchaseContinuedHandler}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          fnIngredientAdd={this.addIngredientHandler}
          fnIngredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          fnOrdered={this.purchaseOrderHandler}
          purchasable={this.state.purchasable}
          purchasing={this.state.purchasing}
          ingredients={this.state.ingredients} />
      </Aux>
    )
  }
}

export { BurgerBuilder, INGREDIENT_PRICES };
