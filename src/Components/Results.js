import { useContextProvider } from "./Provider.js";
import "./Results.css"

export default function Results() {

  const { result, setResult, categories } = useContextProvider();

  // lbs of co2 -> 6000 - 16000 good, 16000-22000 avg, >22000 bad
  return (
    <div className="results">
      <div className="results-chart">
        <section className="monthly">
          <h4>Monthly</h4>
          <span>{result}</span>
        </section>

        <section className="monthly">
          <h4>Yearly</h4>
          <span>{result * 12}</span>
        </section>

      </div>

  </div>
  );
}