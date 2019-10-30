import React from "react"

const PizzaForm = ({pizza, handleClick, handleChange, handleCheck, handleSubmit}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={e => handleChange(e, "topping")} type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping}/>
        </div>
        <div className="col">
          <select onChange={e => handleChange(e, "size")} value={pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={pizza.vegetarian}/>
            <label onChange={e => handleCheck(e, true)} className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button onClick={handleSubmit} type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
