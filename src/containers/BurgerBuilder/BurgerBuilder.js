import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    }
  }

  addIngredient = (event) => {
    event.preventDefault()
    const ingredient = event.target.value
    const ingredientCt = this.state.ingredients[ingredient] + 1
    const updatedIngredients = { ...this.state.ingredients, [ingredient]: ingredientCt }
    this.setState({ ingredients: updatedIngredients })
  }

  subtractIngredient = (event) => {
    event.preventDefault()
    const ingredient = event.target.value
    const ingredientCt = this.state.ingredients[ingredient] - 1
    const updatedIngredients = { ...this.state.ingredients, [ingredient]: ingredientCt }
    this.setState({ ingredients: updatedIngredients })
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <hr />
        <h3>Burger Builder Controls</h3>
        <BuildControls 
          ingredients={Object.keys(this.state.ingredients)}
          fnAdd={this.addIngredient}
          fnSubtract={this.subtractIngredient} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
