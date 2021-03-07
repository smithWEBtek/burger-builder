import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  const ingredients = []
  for(let item in props.ingredients) {
    for(let i = 0; i < props.ingredients[item]; i++){
      ingredients.push(item)
    }
  }
  
  const burgerIngredients = ingredients.map((ingredient, index) => { 
    return <BurgerIngredient key={index} type={ingredient} />
  })

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {burgerIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger;
