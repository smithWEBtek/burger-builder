import React from 'react';
import classes from './BuildControls.module.css'
import Control from './Control';
const buildControls = (props) => {
  const controls = props.ingredients.map((ingredient, index) => {
    return (
    <Control
      key={ingredient + index}
      ingredient={ingredient} 
      fnAdd={props.fnAdd}
      fnSubtract={props.fnSubtract} />
    )
  })

  return (
    <div className={classes.BuildControls}>
      {controls}
    </div>
  )
}
  
export default buildControls;
