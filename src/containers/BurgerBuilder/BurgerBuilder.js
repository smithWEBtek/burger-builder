import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
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

  // addCheese = () => {
  //   const cheeseCt = this.state.ingredients.cheese + 1
  //   const newState = { ...this.state.ingredients, cheese: cheeseCt }
  //   this.setState({ ingredients: newState })
  // }

  // removeCheese = () => {
  //   const cheeseCt = this.state.ingredients.cheese - 1
  //   const newState = { ...this.state.ingredients, cheese: cheeseCt }
  //   this.setState({ ingredients: newState })
  // }

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
        <div>Build Controls</div>
        <button onClick={this.addIngredient} value='cheese'>+ cheese</button>
        <button onClick={this.subtractIngredient} value='cheese'>- cheese</button>

        <button onClick={this.addIngredient} value='meat'>+ meat</button>
        <button onClick={this.subtractIngredient} value='meat'>- meat</button>

        <button onClick={this.addIngredient} value='bacon'>+ bacon</button>
        <button onClick={this.subtractIngredient} value='bacon'>- bacon</button>

        <button onClick={this.addIngredient} value='salad'>+ salad</button>
        <button onClick={this.subtractIngredient} value='salad'>- salad</button>


      </Aux>
    )
  }
}

export default BurgerBuilder;
