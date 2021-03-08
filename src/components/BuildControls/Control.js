import React from 'react';
import classes from './Control.module.css'

const control = (props) => {
  return (
    <div>
      <div>
        <button
          className={classes.Control}
          onClick={props.fnAdd}
          value={props.ingredient}>+ {props.ingredient}</button>
      </div>
      <div>
        <button
          className={classes.Control}
          onClick={props.fnSubtract}
          value={props.ingredient}>- {props.ingredient}</button>
      </div>
    </div>
  )
}

export default control;
