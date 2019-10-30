import React from "react"

const PizzaForm = (props) => {
  const p = props.pizza;
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control"
            placeholder="Pizza Topping"
            onChange={(e) => props.changeTopping(e.target.value)} value={
                p.topping
              }/>
        </div>
        <div className="col">
          <select value={p.size}
          onChange={(e) => props.changeSize(e.target.value)}
           className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={p.vegetarian}
            onChange={(e) => props.changeVeggie(true)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!p.vegetarian}
            onChange={(e) => props.changeVeggie(false)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.changePizza(p)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
