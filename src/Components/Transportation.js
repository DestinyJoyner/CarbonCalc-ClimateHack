import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import { MdOutlineDirectionsBike } from "react-icons/md";
import {
  BsAirplaneEngines,
  BsAirplaneFill,
  BsTrainLightrailFront,
} from "react-icons/bs";

import { useState } from "react";

import "./Transportation.css";

export default function Transportation() {
  return (
    <form className="transpo-form">
      <h2>Transportation</h2>
      <div className="selections">
        <label htmlFor="gas_car">
          <input type="radio" id="gas_car" value="gas_car" />
          <AiFillCar className="icon" /> Gas Car
        </label>
        <label htmlFor="elec_car">
          <input type="radio" id="elec_car" value="elec_car" />
          <AiOutlineCar /> Electric Car
        </label>
        <label htmlFor="bicycle">
          <input type="radio" id="bicycle" value="bike" />
          <MdOutlineDirectionsBike /> Bicycle
        </label>
        <label htmlFor="dom_flight">
          <input type="radio" id="dom_flight" value="dom_flight" />
          <BsAirplaneEngines /> Domestic Flight
        </label>
        <label htmlFor="int_flight">
          <input type="radio" id="int_flight" value="int_flight" />
          <BsAirplaneFill /> international Flight
        </label>
        <label htmlFor="mass_transit">
          <input type="radio" id="mass_transit" value="mass_transit" />
          <BsTrainLightrailFront /> Mass Transit
        </label>
      </div>

      <button id="submit-button" type="sumbit">
        Submit
      </button>
    </form>
  );
}