import React from 'react';
import classes from './BuildControls.css';
import Buildcontrol from '../../Burger/BuildControls/BuildControl/BuildControl';

const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]
const buildcontrols = (props) => {
    return(
        <div className={classes.BuilControls}>
        {
            control.map((cntrl)=><Buildcontrol 
            key={cntrl.label} 
            label={cntrl.label}
            added = {()=>props.ingredientAdded(cntrl.type)}
            removed = {()=> props.ingredientRemoved(cntrl.type)}
            />)
        }
           
        </div>
    )
}

export default buildcontrols