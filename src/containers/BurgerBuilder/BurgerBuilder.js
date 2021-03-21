import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Aux';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
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
    purchasable: false
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
    this.isPurchasable()
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
    this.isPurchasable()
  }

  isPurchasable() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const values = []
    for (let ing in this.state.ingredients) {
      values.push(this.state.ingredients[ing])
    }
    const ingredientsTotal = values.reduce(reducer)
    this.setState({ purchasable: ingredientsTotal === 0 })
  }

  purchaseHandler = () => {
    this.isPurchasable()
    if (this.state.purchasable) {
      alert("order processing")
    }
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <hr />
        <BuildControls
          fnIngredientAdd={this.addIngredientHandler}
          fnIngredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          fnPurchase={this.purchaseHandler}
          purchasable={this.state.purchasable} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
