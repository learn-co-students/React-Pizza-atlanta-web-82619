import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {
      topping: null,
      vegetarian: null,
      size: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  handleClick = (e, pizza) => {
    e.preventDefault()
    this.setState({
      selectedPizza: pizza
    })
  }

  handleChange = (e, keyName) => {
    e.preventDefault()
    
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [keyName]: e.target.value
      }
    })
  }

  handleCheck = (e, val) => {
    this.setState({
      ...this.state.selectedPizza,
      vegetarian: val
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let pizzaID = this.state.selectedPizza.id
    fetch(`http://localhost:3000/pizzas${pizzaID}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.selectedPizza)
    })
    .then(response => response.json())
    .then(data => {
      let updatedPizzas = [...this.state.pizzas].map(pizza => {
        if(pizza.id === pizzaID) {
          pizza = this.state.selectedPizza
        }
        return pizza
      })

      this.setState({
        pizzas: updatedPizzas
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} handleClick={this.handleClick} handleChange={this.handleChange} handleCheck={this.handleCheck} handleSubmit={this.handleSubmit} />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
