import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data.js";

// "food": {
//     "Beef": 220,
//     "Chicken": 64,
//     "Pork": 34.5,
//     "Fish (wild)": 21.5,
//     "Fish (farmed)": 50,
//     "Dairy (cheese)": 83,
//     "Dairy (milk)": 20.75,
//     "Eggs": 31,
//     "Rice": 4.4,
//     "Wheat": 5.65,
//     "Vegetables": 5.2,
//     "Fruits": 11.2
//   },

export default function Food() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="food" style={{ fontFamily: "monospace" }}>
      <h2>What food items do you consume?</h2>
      <h4>Select all that apply!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="beef">
          <input type="radio" id="beef" value={categories.food["Beef"]} />
          Beef
        </label>
        <label htmlFor="chicken">
          <input type="radio" id="chicken" value={categories.food["Chicken"]} />
          Chicken
        </label>
        <label htmlFor="pork">
          <input type="radio" id="pork" value={categories.food["Pork"]} />
          Pork
        </label>

        <label htmlFor="fish (wild)">
          <input
            type="radio"
            id="fish (wild)"
            value={categories.food["Fish (wild)"]}
          />
          Fish (wild)
        </label>
        <label htmlFor="fish (farmed)">
          <input
            type="radio"
            id="fish (farmed)"
            value={categories.food["Fish (farmed)"]}
          />
          Fish (farmed)
        </label>
        <label htmlFor="dairy (cheese)">
          <input
            type="radio"
            id="dairy (cheese)"
            value={categories.food["Dairy (cheese)"]}
          />
          Dairy (cheese)
        </label>
        <label htmlFor="dairy (milk)">
          <input
            type="radio"
            id="dairy (milk)"
            value={categories.food["Dairy (milk)"]}
          />
          Dairy (milk)
        </label>
        <label htmlFor="eggs">
          <input type="radio" id="eggs" value={categories.food["Eggs"]} />
          Eggs
        </label>
        <label htmlFor="rice">
          <input type="radio" id="rice" value={categories.food["Rice"]} />
          Rice
        </label>
        <label htmlFor="wheat">
          <input type="radio" id="wheat" value={categories.food["Wheat"]} />
          Wheat
        </label>
        <label htmlFor="vegetables">
          <input
            type="radio"
            id="vegetables"
            value={categories.food["Vegetables"]}
          />
          Vegetables
        </label>
        <label htmlFor="fruits">
          <input type="radio" id="fruits" value={categories.food["Fruits"]} />
          Fruits
        </label>
        <button onClick={() => navigate("/homeConsumption")}>Next!</button>
      </form>
    </div>
  );
}
