import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import { MdOutlineDirectionsBike } from "react-icons/md";
import {
  BsAirplaneEngines,
  BsAirplaneFill,
  BsTrainLightrailFront,
  BsFlag,
} from "react-icons/bs";
import { BiGasPump, BiWorld } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider.js";

import "./Transportation.css";

export default function Transportation() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState({
    gas_car: false,
    elec_car: false,
    bicycle: false,
    dom_flight: false,
    int_flight: false,
    mass_transit: false,
  });

  const { result, setResult, categories } = useContextProvider();

  const handleCheck = (e) => {
    setChecked({ ...checked, [e.target.id]: !checked[e.target.id] });
  };

  const calculateCarbFootprint = () => {
    let totalCarbFoorprint = 0;

    for (let el in checked) {
      if (checked[el]) {
        totalCarbFoorprint += categories.transportation[el];
      }
    }

    setResult(result + totalCarbFoorprint);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCarbFootprint();
    navigate("/food");
  };

  return (
    <form onSubmit={handleSubmit} className="transpo-form">
      <h2>Transportation</h2>
      <div className="selections">
        <label htmlFor="gas_car">
          <input
            type="checkbox"
            id="gas_car"
            value={checked.gas_car}
            onChange={handleCheck}
          />
          <AiOutlineCar size="30" />
          <BiGasPump size="30" />
        </label>
        <label htmlFor="elec_car">
          <input
            type="checkbox"
            id="elec_car"
            value={checked.elec}
            onChange={handleCheck}
          />
          <AiFillCar size="30" />
          <GiElectric size="30" />
        </label>
        <label htmlFor="bicycle">
          <input
            type="checkbox"
            id="bicycle"
            value={checked.bike}
            onChange={handleCheck}
          />
          <MdOutlineDirectionsBike size="35" />
        </label>
      </div>
      <div className="selections">
        <label htmlFor="dom_flight">
          <input
            type="checkbox"
            id="dom_flight"
            value={checked.dom_flight}
            onChange={handleCheck}
          />
          <BsAirplaneEngines size="30" />
          <BsFlag size="30" />
        </label>
        <label htmlFor="int_flight">
          <input
            type="checkbox"
            id="int_flight"
            value={checked.int_flight}
            onChange={handleCheck}
          />
          <BsAirplaneFill size="30" />
          <BiWorld size="30" />
        </label>
        <label htmlFor="mass_transit">
          <input
            type="checkbox"
            id="mass_transit"
            value={checked.mass_transit}
            onChange={handleCheck}
          />
          <BsTrainLightrailFront size="35" />
        </label>
      </div>

      <button className="next" type="sumbit">
        Next!
      </button>
    </form>
  );
}
