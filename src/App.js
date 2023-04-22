import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import HomeConsumption from "./Components/HomeConsumption";
import Home from "./Components/Home";
import Food from "./Components/Food";
import Results from "./Components/Results";
import Tips from "./Components/Tips";
import Transportation from "./Components/Transportation";
import General from "./Components/General";

function App() {
  return (
    <div className="App">
      <h1>CarbonCalc</h1>
      <Router>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Transportation" element={<Transportation />} />
            <Route path="/food" element={<Food />} />
            <Route path="/homeConsumption" element={<HomeConsumption />} />
            <Route path="/general" element={<General />} />
            <Route path="/results" element={<Results />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
