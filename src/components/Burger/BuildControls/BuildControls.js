import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {

  const orderButton = (
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={() => props.fnOrdered()}>ORDER NOW</button>
  )

  const renderedControls = controls.map(ctrl => {
    return (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        fnIngredientAdd={() => props.fnIngredientAdd(ctrl.type)}
        fnIngredientRemove={() => props.fnIngredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    )
  })

  return (
    <div className={classes.BuildControls}>
      <p className={classes.Price}>Price: ${props.price.toFixed(2)}</p>
      {renderedControls}
      {orderButton}
    </div>
  )
}


export default buildControls;
