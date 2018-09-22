import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/BuildControls';


const PRICE_ADDITION = {
    cheese: 1.2,
    bacon: 3.0,
    meat: 1.3,
    salad: 0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese: 1,
            bacon: 3,
            meat: 1,
            salad: 0
        },
        totalprice: 4
    }

    addIngredientHandler = (type) => {
        const oldIngredient = this.state.ingredients[type];
        const newIngredient = oldIngredient + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = newIngredient;

    const priceAddition = PRICE_ADDITION[type];
    const oldprice = this.state.totalprice;
    const newPrice = oldprice+priceAddition;

        this.setState({totalprice:newPrice, ingredients: updatedIngredient});
    }
    removeIngredientHandler = (type) => {
        const oldIngredient = this.state.ingredients[type];
        const newIngredient = oldIngredient - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = newIngredient;

    const priceAddition = PRICE_ADDITION[type];
    const oldprice = this.state.totalprice;
    const newPrice = oldprice-priceAddition;

        this.setState({totalprice:newPrice, ingredients: updatedIngredient});
    }
render(){
    return(
        <div>
            <Burger ingredients={this.state.ingredients}/>
            <Buildcontrols 
            ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredientHandler}
            />
        </div>
    )
}
}

export default BurgerBuilder;