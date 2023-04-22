import React from "react";
import { useNavigate } from "react-router-dom";
import {categories} from "../data.js";

import { useState } from "react";

export default function General() {
  const navigate = useNavigate();
  // "general consumption": {
  //     "Single-use plastic bag": 3.08,
  //     "Plastic water bottle": 5.28,
  //     "Aluminum can": 0.44,
  //     "Paper bag": 0.1,
  //     "Reusable bag": 0,
  //     "Smartphone": 11.2,
  //     "Laptop": 36.8,
  //     "Desktop computer": 74,
  //     "LED light bulb": 0.48,
  //     "Incandescent light bulb": 5.6
  //   }


  return (
    <div className="general" style={{ fontFamily: "monospace" }}>
      <h1>General Consumption</h1>

      <form>
        <h3> What kind of items do you go for?</h3>
        <label htmlFor="plastic-bag">
          <input
            type="radio"
            id="plastic-bag"
            value={categories["general consumption"]["Single-use plastic bag"]}
          />
          Single Use Plastic Bag
        </label>
        <label htmlFor="reusable-bag">
          <input
            type="radio"
            id="reusable-bag"
            value={categories["general consumption"]["Reusable bag"]}
          />
          Reusable bag
        </label>

        <label htmlFor="paper-bag">
          <input
            type="radio"
            id="paper-bag"
            value={categories["general consumption"]["Paper bag"]}
          />
          Paper Bag
        </label>

        <label htmlFor="plastic-water-bottle">
          <input
            type="radio"
            id="plastic-water-bottle"
            value={categories["general consumption"]["Plastic water bottle"]}
          />
          Plastic water bottle
        </label>
        <label htmlFor="aluminum-can">
          <input
            type="radio"
            id="aluminum-can"
            value={categories["general consumption"]["Aluminum can"]}
          />
          Aluminum Can
        </label>
        <label htmlFor="smartphone">
          <input
            type="radio"
            id="smartphone"
            value={categories["general consumption"]["Smartphone"]}
          />
          Smartphone
        </label>
        <label htmlFor="laptop">
          <input
            type="radio"
            id="laptop"
            value={categories["general consumption"]["Laptop"]}
          />
          Laptop
        </label>
        <label htmlFor="desktop">
          <input
            type="radio"
            id="desktop"
            value={categories["general consumption"]["Desktop computer"]}
          />
          Desktop Computer
        </label>
        <label htmlFor="led-light-bulb">
          <input
            type="radio"
            id="led-light-bulb"
            value={categories["general consumption"]["LED light bulb"]}
          />
          LED light bulb
        </label>
        <label htmlFor="incandescent-light-bulb">
          <input
            type="radio"
            id="incandescent-light-bulb"
            value={categories["general consumption"]["Incandescent light bulb"]}
          />
          Incandescent light bulb
        </label>
        <button onClick={() => navigate("/results")}>Finish!</button>
      </form>
    </div>
  );
}
