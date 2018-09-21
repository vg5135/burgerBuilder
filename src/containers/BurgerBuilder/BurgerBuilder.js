import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        }
    }
render(){
    return(
        <div>
            <Burger ingredients={this.state.ingredients}/>
            <div>Build Controls</div>
        </div>
    )
}
}

export default BurgerBuilder;