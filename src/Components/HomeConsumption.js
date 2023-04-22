import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data.js";

export default function HomeConsumption() {
  //! this will be a form. there will be radio buttons, with options of what the user may use.
  //! each button will have a value associated to it that the user doesn't see
  //! they will be radio buttons. allow for multiple buttons to be selected
  //! the calculations will be made using a function that adds it to the piece of state
  //! up top of the page, the user will be propmted with a question
  //! at the bottom will be a next button, which will direct to the next page with the next question
  // "home": {
  //     "Electricity (coal)": 1497,
  //     "Electricity (natural gas)": 937,
  //     "Electricity (renewable)": 115,
  //     "Natural gas (heating)": 1308,
  //     "Oil (heating)": 1942,
  //     "Propane (heating)": 1569,
  //     "Water usage": 590
  //   },

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="homeConsumption" style={{ fontFamily: "monospace" }}>
        <h2>In your Home, what do you use?</h2>
        <h4>Select all that apply!</h4>
        <form onSubmit={handleSubmit}>
          <h4>Electricity Source?</h4>
          <label htmlFor="electricity (coal)">
            <input
              type="radio"
              id="electricity (coal)"
              value={categories.home["Electricity (coal)"]}
            />
            Electricity (coal)
          </label>
          <label htmlFor="electricity (natural gas)">
            <input
              type="radio"
              id="electricity (natural gas)"
              value={categories.home["Electricity (natural gas)"]}
            />
            Electricity (natural gas)
          </label>
          <label htmlFor="electricity (renewable)">
            <input
              type="radio"
              id="electricity (renewable)"
              value={categories.home["Electricity (renewable)"]}
            />
            Electricity (renewable)
          </label>
          <hr></hr>
          <h4>Heating Source?</h4>
          <label htmlFor="natural gas (heating)">
            <input
              type="radio"
              id="natural gas (heating)"
              value={categories.home["Natural gas (heating)"]}
            />
            Natural gas (heating)
          </label>
          <label htmlFor="oil (heating)">
            <input
              type="radio"
              id="oil (heating)"
              value={categories.home["Oil (heating)"]}
            />
            Oil (heating)
          </label>
          <label htmlFor="propane (heating)">
            <input
              type="radio"
              id="propane (heating)"
              value={categories.home["Propane (heating)"]}
            />
            Propane (heating)
          </label>
          <button onClick={() => navigate("/general")}>Next!</button>
        </form>
      </div>
    </>
  );
}
