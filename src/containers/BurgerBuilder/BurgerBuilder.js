import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 2,
      bacon: 3,
      meat: 2
    }
  }

  addCheese = () => {
    const cheeseCt = this.state.ingredients.cheese + 1
    const newState = {...this.state.ingredients, cheese: cheeseCt }
    this.setState({ ingredients: newState })
  }
  
  removeCheese = () => {
    const cheeseCt = this.state.ingredients.cheese - 1
    const newState = {...this.state.ingredients, cheese: cheeseCt }
    this.setState({ ingredients: newState })
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
        <button onClick={this.addCheese}>Add 1 Cheese</button>
        <button onClick={this.removeCheese}>Remove 1 Cheese</button>
      </Aux>
    )
  }
}

export default BurgerBuilder;
