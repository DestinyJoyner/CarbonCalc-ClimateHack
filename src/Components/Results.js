import React from "react";
import { useContextProvider } from "./Provider.js";

export default function Results() {

  const { result, setResult, categories } = useContextProvider();

  // lbs of co2 -> 6000 - 16000 good, 16000-22000 avg, >22000 bad
  return <div>
    <h1>{result}</h1>
    <h2>{result *12}</h2>
  </div>;
}