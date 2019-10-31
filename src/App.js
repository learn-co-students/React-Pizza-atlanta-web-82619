import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import { timingSafeEqual } from 'crypto';
const URL = 'http://localhost:3000/pizzas'
class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {}
  }
  
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(pizzaData => this.setState({pizzas: pizzaData}))
  }

  editPizza = (pizza) => {
    this.setState({
      currentPizza: pizza
    })
  }

  changePizza = (newPizza) => {
    fetch(URL + `/${newPizza.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(newPizza)
    })
    .then(res => res.json())
    .then(pizzaData => {
      let changedPizzas = this.state.pizzas.map(pizza => {
        if (pizza.id === pizzaData.id){
          return pizzaData
        } else {
          return pizza
        }
      })
      this.setState({pizzas: changedPizzas})
    })
  }

  changeTopping = (newTopping) => {
    this.setState({
      currentPizza: {...this.state.currentPizza, topping: newTopping}
    })
  }

  changeSize = (newSize) => {
    this.setState({
      currentPizza: {...this.state.currentPizza, size: newSize}
    })
  }

  changeVeg = (boolean) => {
    this.setState({
      currentPizza: {...this.state.currentPizza, vegetarian: boolean}
    })
  }


  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          changeTopping={this.changeTopping}
          changeSize={this.changeSize}
          changePizza={this.changePizza}
          changeVeg={this.changeVeg}
          pizza={this.state.currentPizza}
        />
        <PizzaList 
          pizzas={this.state.pizzas} 
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }
}


export default App;
